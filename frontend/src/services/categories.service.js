import API from './api.service'

async function getCategories() {
    return API.call({ uri: `categories/all` })
}

async function getCategoryByName(name) {
    return API.call({ uri: `categories/${name}` })
}


export {
    getCategories,
    getCategoryByName
}

export default {
    getCategories,
    getCategoryByName
}