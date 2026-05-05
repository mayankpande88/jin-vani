// Simple service worker — cache-first for static assets, network-falling-back-to-cache for pages.
// Versioned cache name lets us invalidate on deploy.

const CACHE_VERSION = 'jinvani-v1';
const RUNTIME = 'jinvani-runtime-v1';

self.addEventListener('install', (event) => {
  // Skip waiting so new SW takes control faster
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.addAll([
        '/',
        '/manifest.webmanifest',
        '/icon.svg',
      ]).catch(() => {})
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_VERSION && k !== RUNTIME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Same-origin only
  if (url.origin !== location.origin) return;

  // HTML — network first, fall back to cache
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((m) => m || caches.match('/')))
    );
    return;
  }

  // Static assets — cache first
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const copy = res.clone();
        caches.open(RUNTIME).then((cache) => cache.put(req, copy));
        return res;
      });
    })
  );
});
