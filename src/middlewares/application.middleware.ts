import { body, check } from 'express-validator'
import { handleValidationErrors } from '../utils/errorHandler'

const validateString = (value: string) => {
  return [
    body(value)
      .exists()
      .trim()
      .withMessage(`${value} is missing`)
      .isLength({ min: 3, max: 200 })
      .withMessage(`${value} name length out of bounds. Min: 3 Max: 200`),
  ]
}
const validateUrl = (value: string) => {
  return [
    body(value)
      .if(body(value).not().equals('Not found'))
      .exists()
      .trim()
      .withMessage(`${value} is missing`)
      .isURL()
      .withMessage(`${value} is not a valid URL`),
  ]
}
const validateDate = (value: string) => {
  return [
    check(value)
      .exists()
      .trim()
      .withMessage(`${value} is missing`)
      .isISO8601()
      .toDate()
      .withMessage(`${value} is not a valid date`),
  ]
}

export const validateApplication = [
  ...validateString('job_title'),
  ...validateString('company_name'),
  ...validateUrl('job_offer_url'),
  ...validateDate('date'),
  ...validateString('recruiter_name'),
  ...validateUrl('recruiter_profile_url'),
  handleValidationErrors,
]
