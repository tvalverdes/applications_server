import { Router } from 'express'
import createApplication  from '../services/applications'
const router = Router()

router.get('/', (_, res) => res.send('Hello World'))
router.post('/', )

export default router
