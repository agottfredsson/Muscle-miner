module.exports = {
    pwa: {
        manifestOptions: {
            background_color: 'blue',

        },
        name: 'Muscle-miner',
        themeColor: 'white',
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