// // Service Worker for Fastec Business Solutions
// const CACHE_NAME = 'fastec-v1';
// const urlsToCache = [
//   '/', // Only if you want the root to be cached
//   '/fonts/plus_jakarta_sans/PlusJakartaSans-Regular.ttf',
//   '/fonts/plus_jakarta_sans/PlusJakartaSans-Medium.ttf',
//   '/fonts/inter/Inter-Regular.ttf',
//   '/favicon.svg'
// ];

// // Install event - cache only static resources
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => cache.addAll(urlsToCache))
//   );
// });

// // Fetch event - only serve from cache for static assets
// self.addEventListener('fetch', (event) => {
//   const url = new URL(event.request.url);
//   if (urlsToCache.includes(url.pathname)) {
//     event.respondWith(
//       caches.match(event.request)
//         .then((response) => response || fetch(event.request))
//     );
//   } else {
//     // Always fetch from network for everything else (JS, CSS, etc.)
//     event.respondWith(fetch(event.request));
//   }
// });

// // Activate event - clean up old caches
// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// }); 
