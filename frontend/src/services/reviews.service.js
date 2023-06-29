import API from './api.service'

async function getReviewsByUserId(idUser) {
    return API.call({ uri: `users/${idUser}/reviews` })
}


export {
    getReviewsByUserId
}

export default {
    getReviewsByUserId
}