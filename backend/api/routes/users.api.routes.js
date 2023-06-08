import { Router } from 'express'
import * as controller from '../controllers/users.api.controllers.js'
import { validateUser } from '../../middlewares/user.validate.middleware.js'

const route = Router()

route.post('/users', [validateUser], controller.createUser)
route.get('/users', controller.getUsers)

export default route