const CACHE_NAME = 'portfolio-henrique-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/variables.css',
  '/css/base.css',
  '/css/components.css',
  '/css/sections.css',
  '/css/widgets.css',
  '/css/effects.css',
  '/css/animations.css',
  '/css/lightbox.css',
  '/css/medias.css',
  '/src/js/main.js',
  '/src/js/loader.js',
  '/src/js/translate.js',
  '/src/js/effects.js',
  '/src/js/animations.js',
  '/src/js/ui.js',
  '/src/js/features.js',
  '/src/js/email.js',
  '/src/js/supabase.js',
  '/src/js/theme.js',
  '/src/js/music.js',
  '/src/js/pwa.js',
  '/src/js/config.js',
  '/src/js/utils.js',
  '/manifest.json',
  '/src/icons/icon.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});
