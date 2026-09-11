const CACHE_NAME = "clima-cache-v1";

const ARQUIVO_PARA_CACHE = [
    "index.html",
    "style.css",
    "resultado.html",
    "resultado.js",
    "index.js",
    "manifest.json",
    "img/192.png",
    "img/512.png"
];

self.addEventListener("install", (evento) => {
    evento.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ARQUIVO_PARA_CACHE);
        })
    );
});
self.addEventListener("fetch", (evento) => {
    evento.respondWith(
        caches.match(evento.request).then((respostaCache) => {
            return respostaCache || fetch(evento.request);
        })
    );
});