import API from './api.service'

async function getServices() {
    return API.call({ uri: `users/services` })
}

async function getServiceById(idService) {
    return API.call({ uri: `users/services/${idService}` })
}

async function getServiceByUserId(idUser) {
    return API.call({ uri: `users/${idUser}/services` })
}

async function createService({name, description, min_price, categories, artist_id}) {
    return API.call({ uri: 'users/services', method: 'POST', body: { name, description, min_price, categories, artist_id } })
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