import { Router } from 'express'
import * as controllerUser from '../controllers/users.api.controllers.js'
import * as controllerServices from '../controllers/services.api.controllers.js'
import * as controllerReviews from '../controllers/reviews.api.controllers.js'
import * as controllerCategories from '../controllers/categories.api.controllers.js'
import { validateUser, validateLogin } from '../../middlewares/user.validate.middleware.js'
import { validateService } from '../../middlewares/service.validate.middleware.js'
import { tokenVerify } from '../../middlewares/token.validate.middleware.js'

const route = Router()

route.post('/users', [validateUser], controllerUser.createUser)
route.get('/users/role/:role', controllerUser.getUsers)
route.get('/user/:idUser', controllerUser.getUsersById)
route.get('/users/services', controllerServices.getServices)
route.post('/users/services', [validateService], controllerServices.addService)
route.get('/users/services/:idService', controllerServices.getServicesById)
route.get('/users/:idUser/services', controllerServices.getServicesByUserId)
route.get('/users/:idUser/reviews', controllerReviews.getReviewsByUserId)
route.get('/categories', controllerCategories.getCategories)
route.post('/session', [validateLogin], controllerUser.login)
route.delete('/session', controllerUser.logout)
route.get('/session/profile', [tokenVerify], controllerUser.getCurrentUser)

export default route