const Hapi = require("hapi");
const Joi = require("joi");

module.exports = class ApiCtrl {


    //---------------------------
    //      item get by id
    itemGet(request, reply) {
        return reply("> api-controller : hello method GET");
    }

    //---------------------------
    //      create item
    itemCreate(request, reply) {
        return reply("> api-controller : hello create item !");
    }

};

