importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

self.addEventListener('install', event => {
    console.log('The Service Worker has been registered.')
    event.waitUntil(
        caches.open('cache').then(cache => cache.addAll([
            '/',
            '/index.css',
            '/index.html',
            '/index.js',
            '/icon@48px.png',
            '/icon@96px.png',
            '/icon@192px.png',
            '/manifest.webmanifest',
            '/favicon-16x16.png'
        ]))
    )
})

self.addEventListener('fetch', event => {
    console.log(`The client is requesting ${event.request.url}...`)
    event.respondWith(
        fetch(event.request)
            .then(response => {
                console.log(`${event.request.url} could be fetched.`)
                return caches.open('cache').then(cache => {
                    return cache.match(event.request)
                        .then(response => {
                            console.log(`Replacing ${event.request.url} in the cache.`)
                            cache.put(event.request, response.clone())
                            return response
                        })
                        .catch(() => {
                            console.log(`${event.request.url} should not be in the cache.`)
                            return response
                        })
                })
            })
            .catch(() => {
                console.log(`${event.request.url} could not be fetched.`)
                return caches.open('cache').then(cache => {
                    return cache.match(event.request)
                        .then(response => {
                            console.log(`${event.request.url} was found in the cache.`)
                            return response
                        })
                        .catch(() => {
                            console.log(`${event.request.url} was not found in the cache.`)
                        })
                })
            })
    )
})

if (workbox) {
    console.log('Workbox fungerar! 😎')

    workbox.precaching.precacheAndRoute(['/index.html'])

    workbox.routing.registerRoute(
        /\.(css|html|js|webmanifest)$/,
        new workbox.strategies.NetworkFirst())
} else {
    console.log('Workbox kunde inte laddas in! 😕')
}

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});