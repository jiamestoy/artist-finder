import * as service from '../../services/categories.services.js'

function getCategories(req, res) {
       
    service.getCategories()
        .then(function (categories) {
            res.status(200).json(categories)
        })
}

function getCategoryByName(req, res) {
    
    const name = req.params.name

    service.getCategoryByName(name)
        .then(function (category) {
            res.status(200).json(category)
        })
}

export {
    getCategories,
    getCategoryByName
}