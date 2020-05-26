'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c4d936cf8c8b299cec6b0640976552be",
"assets/assets/crash.wav": "bc2efe67331e6dc1d70315b76376827a",
"assets/assets/hat.wav": "9e325c065ae308459d768ee8625bfda8",
"assets/assets/kick.wav": "5b3f57dcc7bf637d0949e6cba8daa255",
"assets/assets/snare.wav": "1e9ef8dd4aa20b6dc6d8ee6fbedcf249",
"assets/assets/tom1.wav": "5e64bc04cd32a9d38111a09d1ada646e",
"assets/assets/tom2.wav": "83f24cdd14925a3840cd160fac5de555",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "1c61eba292753ca7f26f1b2475ce082f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c9d4a0c6b64646b97e81d7b86518a179",
"/": "c9d4a0c6b64646b97e81d7b86518a179",
"main.dart.js": "74aea7b917d28877811235cff8688419",
"manifest.json": "3b74e80daba55d3cf5c55c7bdcb766d2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
