import { Request, Response } from 'express'
import { ApplicationData, ResponseFormat } from '../types'
import { ApplicationModel } from '../models/application.model'

class ApplicationService {
  async create(req: Request, res: Response<ResponseFormat>) {
    try {
      const application = req.body as ApplicationData
      await ApplicationModel.create(application)
      res
        .status(201)
        .send({ message: `Application ${application.job_title} created` })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === 11000) {
        res.status(400).send({ message: 'Application already added' })
      } else {
        res.status(500).send({ message: `An error occurred: ${error}` })
      }
    }
  }
}

export default ApplicationService
