import { Request, Response } from 'express'

export type ApplicationData = {
  job_title: string
  company_name: string
  job_offer_url: string
  date: string
  recruiter_name: string
  recruiter_profile_url: string
}

enum Gender {
  MALE = 'M',
  FEMALE = 'F',
}

export interface Person {
  create: (req: Request, res: Response) => Promise<void>
}

export type UserData = {
  name: string
  email: string
  password: string
  country: string
  gender: Gender
  applications?: ApplicationData[]
}

export type ResponseFormat = {
  message: string
}

export type ErrorResponseFormat = {
  status: number
  message: string
}
