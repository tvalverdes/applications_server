export type Application = {
  job_title: string
  company_name: string
  job_offer_url: string
  date: string
  recruiter_name: string
  recruiter_profile_url: string
}

enum Sex {
  MALE = 'M',
  FEMALE = 'F',
}

export type User = {
  name: string
  email: string
  password: string
  country: string
  sex: Sex
  applications: Application[]
}

export type ResponseFormat = {
  message: string
}
