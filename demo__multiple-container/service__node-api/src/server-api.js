const Hapi = require("hapi");
const Inert = require("inert");
const mongoose = require("mongoose");
const server = new Hapi.Server();
const apiListen = require("./route/api")

server.connection(
    {
        port: 4040
    }
);

//===   Register plugin's   ===
require("./plugin/swagger").register(server);


//=== GO ====
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("> server-api : start-", server.info.uri);
    apiListen(server);
});

//=== connect to MongoDB ====
mongoose.connect("mongodb://mongodb");
mongoose.connection
    .once('open', () => {
        console.log("> server-api: mongodb connected.");
    });