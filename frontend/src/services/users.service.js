import API from './api.service'

async function getArtists() {
    return API.call({ uri: 'users/role/artist' })
}

async function getBueyers() {
    return API.call({ uri: 'users/role/buyer' })
}

async function getUserById(idUser) {
    return API.call({ uri: `user/${idUser}` })
}

async function createUser({username, email, password, role}) {
    return API.call({ uri: 'users', method: 'POST', body: { username, email, password, role } })
}

async function getCurrent() {
    return API.call({ uri: 'session/profile' })
}

export {
    getArtists,
    getBueyers,
    getUserById,
    createUser,
    getCurrent
}

export default {
    getArtists,
    getBueyers,
    getUserById,
    createUser,
    getCurrent
}