import { Router } from 'express'
import * as controller from '../controllers/users.api.controllers.js'
import { validateUser, validateLogin } from '../../middlewares/user.validate.middleware.js'

const route = Router()

route.post('/users', [validateUser], controller.createUser)
route.get('/users', controller.getUsers)
route.post('/session', [validateLogin], controller.login)
route.delete('/session', controller.logout)

export default route