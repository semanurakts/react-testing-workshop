<<<<<<< HEAD
import {authMiddleware} from '../utils/auth'
import * as userController from '../controllers/users'

function setupUserRoutes(router) {
  router.get('/', userController.getUsers)

  router.get('/:id', authMiddleware.optional, userController.getUser)

  router.put(
    '/:id',
    authMiddleware.required,
    userController.authorize,
    userController.updateUser,
  )

  router.delete(
    '/:id',
    authMiddleware.required,
    userController.authorize,
    userController.deleteUser,
  )
}

=======
import {authMiddleware} from '../utils/auth'
import * as userController from '../controllers/users'

function setupUserRoutes(router) {
  router.get('/', userController.getUsers)

  router.get('/:id', authMiddleware.optional, userController.getUser)

  router.put(
    '/:id',
    authMiddleware.required,
    userController.authorize,
    userController.updateUser,
  )

  router.delete(
    '/:id',
    authMiddleware.required,
    userController.authorize,
    userController.deleteUser,
  )
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export default setupUserRoutes