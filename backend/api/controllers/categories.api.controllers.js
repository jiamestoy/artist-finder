import * as service from '../../services/categories.services.js'

function getCategories(req, res) {
       
    service.getCategories()
        .then(function (categories) {
            res.status(200).json(categories)
        })
}

export {
    getCategories,
}