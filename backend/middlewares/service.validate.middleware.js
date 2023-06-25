import * as serviceSchemas from '../schemas/service.schemas.js'

async function validateService(req, res, next){
    return serviceSchemas.service.validate(req.body, {abortEarly: false, stripUnknown: true})
    .then((service)=>{
        req.body = service
        next()
    })
    .catch((err)=>{
        res.status(400).json({error: {message: err}, test: 'Error al validar middleware' })
    })
}

export {
    validateService
}