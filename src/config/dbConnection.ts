import mongoose from 'mongoose'
import { MONGO_URI } from '../config'

export const connectToDb = async () => {
  try {
    await mongoose.connect(MONGO_URI || '')
    return 'Connected to database'
  } catch (error) {
    return new Error('Could not connect to database: ' + error)
  }
}
