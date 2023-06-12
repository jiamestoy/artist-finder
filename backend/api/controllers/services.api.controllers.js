import * as service from '../../services/services.services.js'


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

export {
    getServicesById,
    getServicesByUserId
}