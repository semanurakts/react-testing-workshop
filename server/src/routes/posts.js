<<<<<<< HEAD
import {authMiddleware} from '../utils/auth'
import * as postController from '../controllers/posts'

function setupPostRoutes(router) {
  router.get('/', postController.getPosts)
  router.get('/:id', postController.getPost)
  router.post('/', authMiddleware.required, postController.createPost)

  router.put(
    '/:id',
    authMiddleware.required,
    postController.authorize,
    postController.updatePost,
  )

  router.delete(
    '/:id',
    authMiddleware.required,
    postController.authorize,
    postController.deletePost,
  )
}

=======
import {authMiddleware} from '../utils/auth'
import * as postController from '../controllers/posts'

function setupPostRoutes(router) {
  router.get('/', postController.getPosts)
  router.get('/:id', postController.getPost)
  router.post('/', authMiddleware.required, postController.createPost)

  router.put(
    '/:id',
    authMiddleware.required,
    postController.authorize,
    postController.updatePost,
  )

  router.delete(
    '/:id',
    authMiddleware.required,
    postController.authorize,
    postController.deletePost,
  )
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export default setupPostRoutes