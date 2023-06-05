import * as userSchemas from '../schemas/user.schemas.js'

async function validateUser(req, res, next){
    return userSchemas.user.validate(req.body, {abortEarly: false, stripUnknown: true})
    .then((user)=>{
        req.body = user
        next()
    })
    .catch((err)=>{
        res.status(400).json({error: err})
    })
}

export {
    validateUser
}