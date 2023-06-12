import API from './api.service'

async function getArtists() {
    return API.call({ uri: 'artist' })
}

async function getBueyers() {
    return API.call({ uri: 'buyer' })
}

async function getUserById(idUser) {
    return API.call({ uri: `user/${idUser}` })
}


export {
    getArtists,
    getBueyers,
    getUserById
}

export default {
    getArtists,
    getBueyers,
    getUserById
}