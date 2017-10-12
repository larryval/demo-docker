const inert = require("inert");
const vision = require("vision");

module.exports = {
    register:(server)=>{
        server.register([
                require('inert'),
                require('vision'),
                {
                    register: require('hapi-swagger'),
                    options: {
                        info: {
                            title: 'API DEMO',
                            description: "ma doc de l'API de démo"
                        },
                        tags: [
                            {
                                'name': 'pics',
                                'description': 'Gére les images still pour toutes les apps.'
                            },
                            {
                                'name': 'job-timelapse',
                                'description': "Gére les jobs timelapse"
                            },
                            {
                                'name': 'job-detection',
                                'description': "Gére les jobs detection"
                            },
                            {
                                'name': 'stream',
                                'description': "demarre/stop le streaming"
                            }
                        ],
                        sortEndpoints: 'ordered',
                        documentationPath: '/docs',
                        swaggerUI: true
                    }
                }
            ]
            , (error) => {
                if (error) {
                    console.log('error', error);
                }
            })
    }
}