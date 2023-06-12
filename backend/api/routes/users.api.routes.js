import { Router } from 'express'
import * as controllerUser from '../controllers/users.api.controllers.js'
import * as controllerServices from '../controllers/services.api.controllers.js'
import * as controllerReviews from '../controllers/reviews.api.controllers.js'
import { validateUser, validateLogin } from '../../middlewares/user.validate.middleware.js'

const route = Router()

route.post('/users', [validateUser], controllerUser.createUser)
route.get('/:role', controllerUser.getUsers)
route.get('/user/:idUser', controllerUser.getUsersById)
route.get('/services/:idUser', controllerServices.getServicesByUserId)
route.get('/reviews/:idUser', controllerReviews.getReviewsByUserId)
route.post('/session', [validateLogin], controllerUser.login)
route.delete('/session', controllerUser.logout)

export default route