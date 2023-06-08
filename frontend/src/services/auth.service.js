import API from './api.service'

async function login({ username, password }) {
    return API.call({ uri: 'session', method: 'POST', body: { username, password } })
}

async function logout() {
    return API.call({ uri: 'session', method: 'DELETE' })
}


export {
    login,
    logout
}

export default {
    login,
    logout
}