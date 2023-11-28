import { body } from 'express-validator'
import { handleValidationErrors } from '../utils/errorHandler'
import User from '../services/users'

const validateName = (value: string) => {
  return [
    body(value)
      .notEmpty()
      .trim()
      .withMessage(`${value} is missing`)
      .isLength({ min: 3, max: 100 })
      .withMessage(`${value} length out of bounds. Min: 3 Max: 100`)
      .isAlpha('es-ES', { ignore: ' ' }),
  ]
}
const validateEmail = (value: string) => {
  return [
    body(value)
      .notEmpty()
      .trim()
      .withMessage(`${value} is missing`)
      .isEmail()
      .withMessage(`${value} is not a valid email`)
      .custom(async (value) => {
        const user = new User()
        const userFound = await user.findByEmail(value)
        if (userFound) {
          throw new Error('Email already exists')
        }
      }),
  ]
}
const validatePassword = (value: string) => {
  return [
    body(value)
      .notEmpty()
      .trim()
      .withMessage(`${value} is missing`)
      .isLength({ min: 8, max: 30 })
      .withMessage(`${value} length out of bounds. Min: 8 Max: 30`),
  ]
}
const validateGender = (value: string) => {
  return [
    body(value)
      .notEmpty()
      .trim()
      .withMessage(`${value} is missing`)
      .toUpperCase()
      .isIn(['M', 'F'])
      .withMessage(`${value} is not a valid sex`),
  ]
}
const validateCountry = (value: string) => {
  return [
    body(value)
      .notEmpty()
      .trim()
      .withMessage(`${value} is missing`)
      .isAlpha()
      .withMessage('Use only letters')
      .isLength({ min: 3, max: 3 })
      .withMessage(`${value} length out of bounds. Must have 3 characters`),
  ]
}

export const validateUser = [
  ...validateName('name'),
  ...validateEmail('email'),
  ...validatePassword('password'),
  ...validateCountry('country'),
  ...validateGender('gender'),
  handleValidationErrors,
]
