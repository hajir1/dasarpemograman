import Joi from "joi";

export const registerUserValidation = Joi.object({
    username :Joi.string().max(100).required(),
    password :Joi.string().max(100).required(),
    nama :Joi.string().max(50).required(),
})