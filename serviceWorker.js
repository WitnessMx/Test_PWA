const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/Test_PWA/",
  "/Test_PWA/index.html",
  "/Test_PWA/css/style.css",
  "/Test_PWA/js/app.js",
  "/Test_PWA/images/coffee1.jpg",
  "/Test_PWA/images/coffee2.jpg",
  "/Test_PWA/images/coffee3.jpg",
  "/Test_PWA/images/coffee4.jpg",
  "/Test_PWA/images/coffee5.jpg",
  "/Test_PWA/images/coffee6.jpg",
  "/Test_PWA/images/coffee7.jpg",
  "/Test_PWA/images/coffee8.jpg",
  "/Test_PWA/images/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
