import * as service from '../../services/services.services.js'

function getServicesByUserId(req, res) {
    
    const idUser = req.params.idUser

    service.getServices(idUser)
        .then(function (service) {
            res.status(200).json(service)
        })
}

export {
    getServicesByUserId
}