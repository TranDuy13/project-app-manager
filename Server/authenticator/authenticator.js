const joi = require("@hapi/joi")

const checker ={
    register: joi.object().keys({
        username: joi.string().min(6).required(),
        password: joi.string().min(8).required(),       
        fullname: joi.string().min(6).required(),
        role: joi.string().min(3).required(),
        address: joi.string().min(6).required(),
        IDcard:joi.number().integer().min(10).required(),
        telephone: joi.number().integer().min(10).required(),
        email: joi.string().min(10).required(),
        birthday: joi.string().min(10).required(),
        status:joi.string().min(6).required(),
    }),
    login: joi.object().keys({
        username: joi.string().min(6).required(),
        password: joi.string().min(8).required(), 
    }),
    changePassword: joi.object().keys({
        id:joi.string().min(8).required(),
        oldPassword: joi.string().min(8).required(),
        newPassword: joi.string().min(8).required(),

    }),
    updateProfile :joi.object().keys({  
        id: joi.string().min(6),
        fullname: joi.string().min(6),
        address: joi.string().min(6),
        username:joi.string().min(6),
        IDcard:joi.number().integer().min(10),
        telephone: joi.number().integer().min(10),
        email: joi.string().min(10),
        birthday: joi.string().min(10),
        password:joi.string().min(8),
        role:joi.string().min(6),
        status:joi.string().min(6),
    }),
}

module.exports = checker

