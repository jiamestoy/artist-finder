import API from './api.service'

async function getServiceById(idService) {
    return API.call({ uri: `services/${idService}` })
}

async function getServiceByUserId(idUser) {
    return API.call({ uri: `services/user/${idUser}` })
}


export {
    getServiceById,
    getServiceByUserId
}

export default {
    getServiceById,
    getServiceByUserId
}