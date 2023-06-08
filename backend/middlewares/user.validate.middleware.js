import * as userSchemas from '../schemas/user.schemas.js'

async function validateUser(req, res, next){
    return userSchemas.user.validate(req.body, {abortEarly: false, stripUnknown: true})
    .then((user)=>{
        req.body = user
        next()
    })
    .catch((err)=>{
        res.status(400).json({error: {message: err}, test: 'Error al validar middleware' })
    })
}

async function validateLogin(req, res, next){
    return userSchemas.login.validate(req.body, {abortEarly: false, stripUnknown: true})
    .then((user)=>{
        req.body = user
        next()
    })
    .catch((err)=>{
        res.status(400).json({error: {message: err}, test: 'Error al validar middleware'})
    })
}

export {
    validateUser,
    validateLogin
}