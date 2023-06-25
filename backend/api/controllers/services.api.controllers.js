import * as service from '../../services/services.services.js'

function getServices(req, res) {

    service.getServices()
        .then(function (service) {
            res.status(200).json(service)
        })
}


function getServicesById(req, res) {
    
    const idService = req.params.idService

    service.getServicesById(idService)
        .then(function (service) {
            res.status(200).json(service)
        })
}

function getServicesByUserId(req, res) {
    
    const idUser = req.params.idUser

    service.getServicesByUserId(idUser)
        .then(function (service) {
            res.status(200).json(service)
        })
}

async function addService(req, res) {

    return service.createService(req.body)
    .then(()=>{
        res.status(201).json({message: 'Servicio creado con éxito.'})
        // res.redirect("/success")
    })
    .catch((err)=>{
        res.status(400).json({error: {message: err, test: 'Error del controller'}})
    })
}

export {
    getServices,
    getServicesById,
    getServicesByUserId,
    addService
}