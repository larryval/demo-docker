const Hapi = require("hapi");

const ApiCtrl = require("./api-controller")
const ApiValidator = require("./api-validator")

module.exports = function apiListen(server) {

    const apiCtrl = new ApiCtrl();
    server.bind(apiCtrl);

    //---------------------------
    //      item get by id
    server.route({
            method: "GET",
            path: "/item/{id}",
            config: {
                handler: apiCtrl.itemGet,
                tags: ['api','item'],
                description: "chope un item avec l'id !",
                validate: {
                    params:ApiValidator.itemGet
                },
                plugins: {
                    'hapi-swagger': {
                        order:1,
                        responses: {
                            '200': {
                                'description': 'Task founded.'
                            },
                            '404': {
                                'description': 'Task does not exists.'
                            }
                        }
                    }
                }
            }
        }
    );

    //---------------------------
    //      create item
    server.route({
            method: "POST",
            path: "/item",
            config: {
                handler: apiCtrl.itemCreate,
                tags: ['api','item'],
                description: "création d'un item",
                validate: {
                    payload:ApiValidator.itemPostPayload
                },
                plugins: {
                    'hapi-swagger': {
                        order:2,
                        responses: {
                            '200': {
                                'description': 'Task founded.'
                            },
                            '404': {
                                'description': 'Task does not exists.'
                            }
                        }
                    }
                }
            }
        }
    );

};