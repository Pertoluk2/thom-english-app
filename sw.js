const CACHE_NAME = 'hoc-tieng-anh-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'icon-192x192.png',
  'icon-512x512.png'
];

// Installatie van de Service Worker en cachen van de bestanden
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ophalen van content uit de cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Als we het in de cache vinden, geven we het terug
        if (response) {
          return response;
        }
        // Anders halen we het van het netwerk
        return fetch(event.request);
      }
    )
  );
});