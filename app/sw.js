const swVer = 'restaurant-static-v1';
const urlsToCache = [
  '/',
  '/styles/vendor.css',
  '/styles/main.css',
  '/scripts/main.js',
  '/scripts/restaurant_info.js',
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(swVer)
      .then(cache => {
        // cache assets in array
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log(`caches error is ${error}`);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cachesNames => {
      return Promise.all(
        cachesNames
          .filter(cacheName => {
            // filter cache names beginning with restaurant and but not the current cache version
            return cacheName.startsWith('restaurant-') && cacheName != swVer;
          })
          .map(cacheName => {
            // delete cache
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // resopond with cache else regular request.
      if (response) return response;
      return fetch(event.request);
    })
  );
});
