const Joi=require('joi');
const SignUpSchema=Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})
const LoginSchema=Joi.object({
   
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})
module.exports={SignUpSchema,LoginSchema};