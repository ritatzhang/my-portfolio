/*
 <script>
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker
            .register("./offline.js", { scope: "/" })
            .then(function(registration) {
              console.log("service worker required");
            });
          navigator.serviceWorker.ready.then(function(registration) {
            console.log("service worker required");
          });
        }
      </script>
*/
const CACHE_NAME = "DevReach";

self.addEventListener("install", e => {
  console.log("installing service worker");
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(["/", "/index.html"]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  console.log("activating service worker");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then(function(response) {
          if (
            !response ||
            response.status != 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          var responseToCache = response.clone();

          caches.open(CACHE_NAME).then(function(cahce) {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          if (response) {
            return response;
          }
        });
    })
  );
});
