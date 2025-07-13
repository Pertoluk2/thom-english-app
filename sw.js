const CACHE_NAME = 'hoc-tieng-anh-cache-v30'; // AANGEPAST: Verhoog de cacheversie
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png',
  // Bestaande afbeeldingen
  'images/ring.png',
  'images/sheep.png',
  'images/city.png',
  'images/please.png',
  'images/blue.png',
  'images/facebook.png',
  'images/sugar.png',
  'images/seat.png',
  'images/soup.png',
  'images/group.png',
  // NIEUW: Afbeeldingen voor de puzzel toevoegen aan de cache (Unit 1)
  'images/see.png',
  'images/teacher.png',
  'images/eat.png',
  'images/sleep.png',
  'images/speak.png',
  'images/vietnamese.png',
  'images/feel.png',
  'images/pig.png',
  'images/fish.png',
  'images/chicken.png',
  'images/kitten.png',
  'images/listen.png',
  'images/kick.png',
  'images/sit.png',
  'images/ship.png',
  'images/cool.png',
  'images/shoe.png',
  'images/move.png',
  'images/pool.png',
  'images/movie.png',
  'images/youtube.png',
  'images/food.png',
  'images/bamboo.png',
  'images/good.png',
  'images/cook.png',
  'images/book.png',
  'images/look.png',
  'images/wood.png',
  'images/foot.png',
  'images/football.png',
  // NIEUW: Afbeeldingen voor de puzzel toevoegen aan de cache (Unit 2)
  'images/ten.png',
  'images/men.png',
  'images/red.png',
  'images/pen.png',
  'images/friend.png',
  'images/head.png',
  'images/send.png',
  'images/letter.png',
  'images/ready.png',
  'images/internet.png',
  'images/black.png',
  'images/hat.png',
  'images/dragon.png',
  'images/fan.png',
  'images/apple.png',
  'images/happy.png',
  'images/sad.png',
  'images/bad.png',
  'images/man.png',
  'images/exam.png',
  'images/wonderful.png',
  'images/brother.png',
  'images/summer.png',
  'images/family.png',
  'images/album.png',
  'images/agree.png',
  'images/enemy.png',
  'images/freedom.png',
  'images/banana.png',
  'images/number.png',
  'images/nervous.png',
  'images/curly.png',
  'images/girl.png',
  'images/learn.png',
  'images/work.png',
  'images/dirty.png',
  'images/bird.png',
  'images/surf.png',
  'images/hurt.png',
  'images/burn.png',
  // NIEUW: Afbeeldingen voor de puzzel toevoegen aan de cache (Unit 3)
  'images/son.png',
  'images/mother.png',
  'images/husband.png',
  'images/uncle.png',
  'images/monkey.png',
  'images/puppy.png',
  'images/honey.png',
  'images/cup.png',
  'images/sunny.png',
  'images/bus.png',
  'images/father.png',
  'images/farmer.png',
  'images/scar.png',
  'images/arm.png',
  'images/heart.png',
  'images/party.png',
  'images/bar.png',
  'images/market.png',
  'images/far.png',
  'images/car.png',
  'images/four.png',
  'images/tall.png',
  'images/strong.png',
  'images/daughter.png',
  'images/ball.png',
  'images/horse.png',
  'images/door.png',
  'images/floor.png',
  'images/ignore.png',
  'images/autumn.png',
  // NIEUW: Afbeeldingen voor de puzzel toevoegen aan de cache (Unit 4)
  'images/eight.png',
  'images/cake.png',
  'images/grape.png',
  'images/game.png',
  'images/wait.png',
  'images/plane.png',
  'images/wave.png',
  'images/vacation.png',
  'images/royal.png',
  'images/boy.png',
  'images/noisy.png',
  'images/voice.png',
  'images/toy.png',
  'images/spoil.png',
  'images/choice.png',
  'images/toilet.png',
  'images/find.png',
  'images/bye.png',
  'images/shy.png',
  'images/tired.png',
  'images/fly.png',
  'images/sky.png',
  'images/island.png',
  'images/icon.png',
  'images/sure.png',
  'images/poor.png',
  'images/furious.png',
  'images/tourist.png',
  'images/tour.png',
  'images/europe.png',
  'images/kualalumpur.png',
  'images/mature.png',
  // NIEUW: Audiobestanden voor Unit 1 secties
  'audio/unit1_part1_slow.mp3',
  'audio/unit1_part1_fast.mp3',
  'audio/unit1_part2_slow.mp3',
  'audio/unit1_part2_fast.mp3',
  'audio/unit1_part3_slow.mp3',
  'audio/unit1_part3_fast.mp3',
  'audio/unit1_part4_slow.mp3',
  'audio/unit1_part4_fast.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache v29'); // AANGEPAST: Log de nieuwe versie
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