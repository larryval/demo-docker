const Hapi = require("hapi");
const Inert = require("inert");

const server = new Hapi.Server();

server.connection(
    {
        port: 3030
    }
);

// Register plugin's ===
server.register(Inert, (err) => {
    if (err) {
        throw err;
    }
});

// index route
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './public/',
            listing: false,
            index: true
        }
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
});

//=== GO ====
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("The Magic Happens at:", server.info.uri);
});
