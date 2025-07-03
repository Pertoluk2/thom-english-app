const CACHE_NAME = 'hoc-tieng-anh-cache-v24'; 
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png',
  // NIEUW: Afbeeldingen voor de puzzel toevoegen aan de cache
  'images/ring.png',
  'images/sheep.png',
  'images/city.png',
  'images/please.png',
  'images/blue.png',
  'images/facebook.png',
  'images/sugar.png',
  'images/seat.png',
  'images/soup.png',
  'images/group.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache v19');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Altijd netwerk proberen voor externe bronnen (zoals imgur)
        const fetchRequest = event.request.clone();
        const isExternalImage = fetchRequest.url.startsWith('https://i.imgur.com');

        if (isExternalImage) {
            return fetch(fetchRequest);
        }

        // Cache-first voor lokale bestanden
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(fetchRequest);
      })
  );
});