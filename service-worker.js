self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Basic offline caching (optional but nice on iPhone home screen)
const CACHE_NAME = "love-app-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./icon.png",
  "./manifest.webmanifest",
  "./service-worker.js"
];

self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;

      try {
        const fresh = await fetch(req);
        // Cache same-origin GET requests
        if (req.method === "GET" && new URL(req.url).origin === self.location.origin) {
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch (e) {
        // Offline fallback to cached index
        return cache.match("./index.html");
      }
    })
  );
});

// Receive message from the page and show notification
self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SHOW_NOON" && typeof data.message === "string") {
    self.registration.showNotification("Daily Reason I Love You ❤️", {
      body: data.message,
      icon: "icon.png"
    });
  }
});
