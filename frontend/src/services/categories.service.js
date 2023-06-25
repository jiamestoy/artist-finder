import API from './api.service'

async function getCategories() {
    return API.call({ uri: `categories/all` })
}

export {
    getCategories,
}

export default {
    getCategories,

}