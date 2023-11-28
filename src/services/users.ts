import { Request, Response } from 'express'
import { UserData, Person } from '../types'
import { UserModel } from '../models/user.model'

class User implements Person {
  async create(req: Request, res: Response) {
    try {
      const user = req.body as UserData
      await UserModel.create(user)
      res
        .status(201)
        .send({ message: `User ${user.name} created successfully` })
    } catch (error) {
      res.status(500).send({ message: `An error occurred: ${error}` })
    }
  }

  async findByEmail(email: string) {
    const emailFound = await UserModel.findOne({ email })
    return emailFound
  }
}

export default User
