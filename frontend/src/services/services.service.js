import API from './api.service'

async function getServices() {
    return API.call({ uri: `services/all` })
}

async function getServiceById(idService) {
    return API.call({ uri: `services/${idService}` })
}

async function getServiceByUserId(idUser) {
    return API.call({ uri: `services/user/${idUser}` })
}

async function createService({name, description, min_price, categories, artist_id}) {
    return API.call({ uri: 'services', method: 'POST', body: { name, description, min_price, categories, artist_id } })
}


export {
    getServices,
    getServiceById,
    getServiceByUserId,
    createService
}

export default {
    getServices,
    getServiceById,
    getServiceByUserId,
    createService
}