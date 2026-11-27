// Xưởng Video Affiliate – bản 1.0.0. Mạng trước, mất mạng thì lấy bản đã lưu.
const KHO = 'xva-1.0.0';
const TEP = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(KHO).then(c => c.addAll(TEP)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== KHO).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { if (r.ok && new URL(e.request.url).origin === location.origin) { const b = r.clone(); caches.open(KHO).then(c => c.put(e.request, b)); } return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
