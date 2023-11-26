import { Router } from 'express'
import ApplicationService from '../services/applications'
import { validateApplication } from '../middlewares/application.middleware'
const router = Router()

const application = new ApplicationService()

router.get('/', (_, res) => res.send('Hello World'))
router.post('/', validateApplication, application.createApplication)

export default router
