// Versie verhoogd naar v14 - met 'bulletproof' fetch-logica voor Chrome
const CACHE_NAME = 'hoc-tieng-anh-cache-v14'; 
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png'
];

// Installatie-event: slaat alle benodigde bestanden op in de cache.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache v12');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate-event: ruimt alle oude caches op.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch-event: De nieuwe, robuuste logica.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Als het in de cache staat, geef het direct terug.
        if (cachedResponse) {
          return cachedResponse;
        }

        // Als het niet in de cache staat, haal het van het netwerk.
        return fetch(event.request).then(
          networkResponse => {
            // Controleer of we een geldig antwoord hebben gekregen.
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Belangrijk: maak een kopie van het antwoord.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Sla de nieuwe versie op in de cache voor de volgende keer.
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        );
      })
  );
});