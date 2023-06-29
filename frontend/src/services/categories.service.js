import API from './api.service'

async function getCategories() {
    return API.call({ uri: `categories` })
}

export {
    getCategories,
}

export default {
    getCategories,

}