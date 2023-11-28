import { Router } from 'express'
import { validateUser } from '../middlewares/user.middleware'
import User from '../services/users'
const router = Router()

const user = new User()
router.get('/', (_, res) => res.send('Hello World'))
router.post('/', validateUser, user.create)

export default router
