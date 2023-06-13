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

async function createUser({username, email, password, passwordCheck, role}) {
    return API.call({ uri: `users`, method: 'POST', body: { username, email, password, passwordCheck, role } })
}


export {
    getArtists,
    getBueyers,
    getUserById,
    createUser
}

export default {
    getArtists,
    getBueyers,
    getUserById,
    createUser
}