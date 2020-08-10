importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

if (workbox) {
    console.log('Workbox fungerar! 😎')

    workbox.precaching.precacheAndRoute(['/index.html'])
    workbox.routing.registerRoute(
        /\.(css|html|js|webmanifest)$/,
        new workbox.strategies.NetworkFirst())

} else {
    console.log('Workbox kunde inte laddas in! 😕')
}