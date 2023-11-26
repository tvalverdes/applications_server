import mongoose, { Schema } from 'mongoose'
import { Application } from '../types'

const ApplicationSchema = new Schema<Application>({
  job_title: { type: String, required: true },
  company_name: { type: String, required: true },
  job_offer_url: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  recruiter_name: { type: String, required: true },
  recruiter_profile_url: { type: String, required: true },
})

export const ApplicationModel = mongoose.model('Application', ApplicationSchema)
