// Simple service worker.
// - /_next/static/* is content-hashed and immutable: cache first.
// - Everything else (HTML, RSC .txt payloads, Pagefind index, manifest, icon)
//   is NOT versioned by filename, so it must be network first, falling back to
//   the cache only when offline. Serving these cache-first kept old content
//   (and an old search index pointing at deleted files) alive after a deploy.
// Bump CACHE_VERSION when this file's caching rules change; activate deletes
// every cache that isn't in the current pair.

const CACHE_VERSION = 'jinvani-v2';
const RUNTIME = 'jinvani-runtime-v2';

// Scope-relative URLs, so the site works at the domain root and under a
// basePath such as /jin-vani/ on GitHub Pages.
const SCOPE = new URL(self.registration.scope).pathname; // e.g. "/" or "/jin-vani/"
const HOME = SCOPE;

self.addEventListener('install', (event) => {
  // Skip waiting so new SW takes control faster
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.addAll([
        HOME,
        SCOPE + 'manifest.webmanifest',
        SCOPE + 'icon.svg',
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

function putInCache(req, res) {
  if (!res || !res.ok || res.type !== 'basic') return;
  const copy = res.clone();
  caches.open(RUNTIME).then((cache) => cache.put(req, copy));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Same-origin, in-scope only
  if (url.origin !== location.origin) return;
  if (!url.pathname.startsWith(SCOPE)) return;

  // Immutable, content-hashed build assets — cache first
  if (url.pathname.startsWith(SCOPE + '_next/static/')) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          putInCache(req, res);
          return res;
        });
      })
    );
    return;
  }

  // Everything else — network first, fall back to cache when offline
  const isPage = req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html');
  event.respondWith(
    fetch(req)
      .then((res) => {
        putInCache(req, res);
        return res;
      })
      .catch(() =>
        caches.match(req).then((m) => {
          if (m) return m;
          if (isPage) return caches.match(HOME).then((h) => h || Response.error());
          return Response.error();
        })
      )
  );
});
