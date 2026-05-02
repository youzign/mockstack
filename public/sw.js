const CACHE_NAME = "mockstack-shell-v6"
const APP_SHELL = [
  "/",
  "/app",
  "/thank-you",
  "/logo-mark.svg",
  "/logo-mark.png",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.svg",
  "/manifest.webmanifest",
  "/special.html",
  "/sales-im.css",
  "/colors_and_type.css",
  "/preset-names.json",
  "/mockstack-3d-cover.png",
  "/the-problem.png",
  "/api-direct-pricing.png",
  "/130-presets.png",
  "/lightweight-web-app.png",
  "/video-presets.png",
  "/commercial-license.png",
  "/founder-pledge.png",
  "/founder.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener("fetch", (event) => {
  const request = event.request
  if (request.method !== "GET") return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match("/")))
    return
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)))
})
