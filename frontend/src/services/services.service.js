import API from './api.service'

async function getServiceByUserId(idUser) {
    return API.call({ uri: `services/${idUser}` })
}


export {
    getServiceByUserId
}

export default {
    getServiceByUserId
}