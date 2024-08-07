<<<<<<< HEAD
import express from 'express'
import setupUserRoutes from './users'
import setupAuthRoutes from './auth'
import setupPostRoutes from './posts'

function setupRoutes(app) {
  const authRouter = express.Router()
  setupAuthRoutes(authRouter)
  app.use('/api/auth', authRouter)

  const userRouter = express.Router()
  setupUserRoutes(userRouter)
  app.use('/api/users', userRouter)

  const postRouter = express.Router()
  setupPostRoutes(postRouter)
  app.use('/api/posts', postRouter)
}

=======
import express from 'express'
import setupUserRoutes from './users'
import setupAuthRoutes from './auth'
import setupPostRoutes from './posts'

function setupRoutes(app) {
  const authRouter = express.Router()
  setupAuthRoutes(authRouter)
  app.use('/api/auth', authRouter)

  const userRouter = express.Router()
  setupUserRoutes(userRouter)
  app.use('/api/users', userRouter)

  const postRouter = express.Router()
  setupPostRoutes(postRouter)
  app.use('/api/posts', postRouter)
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export default setupRoutes