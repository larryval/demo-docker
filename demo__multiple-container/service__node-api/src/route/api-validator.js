const Joi = require("joi");

module.exports = {
    itemGetParams: Joi.object({
        id: Joi.number().required().example(10).description("un id d'un item a retourner !")
    }),
    itemPostPayload: Joi.object({
        itemName: Joi.string().required().example("je suis 'item truc'").description("le nom d'un item"),
        itemPrice: Joi.number().example(4000).description("4000 boules l'item!")
    })
};