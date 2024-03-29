import express from 'express'
import routerApplication from './controllers/applications'
import routerUser from './controllers/users'
import { connectToDb } from './config/dbConnection'
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))
app.use('/api/applications', routerApplication)
app.use('/api/users', routerUser)

connectToDb()
  .then((res) => console.log(res))
  .then(() =>
    app.listen(port, () =>
      console.log(`Example app listening on port http://localhost:${port}`)
    )
  )
  .catch((err) => console.log(err))
