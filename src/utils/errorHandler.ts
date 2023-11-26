/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { ValidationError, validationResult } from 'express-validator'

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const extractedErrors: any = {}
    errors.array().forEach((err) => {
      const validationError: any = err as ValidationError
      extractedErrors[validationError.path] = validationError.msg
    })

    return res.status(400).json({ errors: extractedErrors })
  }

  return next()
}
