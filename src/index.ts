import express from 'express'
import routerApplication from './controllers/applications'
import { connectToDb } from './config/dbConnection'
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))
app.use('/api/applications', routerApplication)

connectToDb()
  .then((res) => console.log(res))
  .then(() =>
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  )
  .catch((err) => console.log(err))
