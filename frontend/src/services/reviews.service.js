import API from './api.service'

async function getReviewsByUserId(idUser) {
    return API.call({ uri: `reviews/${idUser}` })
}


export {
    getReviewsByUserId
}

export default {
    getReviewsByUserId
}