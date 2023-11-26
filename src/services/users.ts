import { Request, Response } from 'express'
import { ApplicationModel } from '../models/application.model'
import { ResponseFormat, User } from '../types'

export const createUser = async (
  req: Request,
  res: Response<ResponseFormat>
) => {
  try {
    const application: User = req.body
    const newApplication = await ApplicationModel.create(application)
    newApplication.save()
    res
      .status(201)
      .send({ message: `Application ${newApplication.job_title} created` })
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).send({ message: 'Application already added' })
    } else {
      res.status(500).send({ message: `An error occurred: ${error}` })
    }
  }
}