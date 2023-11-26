import { Request, Response } from 'express'
import { ApplicationModel } from '../models/application.model'
import { Application, ResponseFormat } from '../types'

class ApplicationService {
  async createApplication(req: Request, res: Response<ResponseFormat>) {
    try {
      const application: Application = req.body
      const newApplication = await ApplicationModel.create(application)
      newApplication.save()
      res
        .status(201)
        .send({ message: `Application ${newApplication.job_title} created` })
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
