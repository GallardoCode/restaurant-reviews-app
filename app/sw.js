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
      .open('restaurant-static-v1')
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log(`caches error is ${error}`);
      })
  );
});
