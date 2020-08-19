module.exports = {
    pwa: {
        manifestOptions: {
            background_color: 'blue'
        },
        name: 'Muscle-miner',
        themeColor: 'white',
        "icons": [
            {
                "src": "./assets/images/weight-logo.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "./assets/images/weight-logo.png",
                "sizes": "512x512",
                "type": "image/png"
            },
            {
                "src": "./assets/images/weight-logo.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "../assets/images/weight-logo.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
            }
        ],
        workboxOptions: {
            runtimeCaching: [
                {
                    handler: 'NetworkFirst',
                    urlPattern: 'http://localhost:3000/'
                }
            ]
        },

    }
}