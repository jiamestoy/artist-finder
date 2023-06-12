import * as service from '../../services/reviews.services.js'

function getReviewsByUserId(req, res) {
    
    const idUser = req.params.idUser

    service.getReviews(idUser)
        .then(function (review) {
            res.status(200).json(review)
        })
}

export {
    getReviewsByUserId
}