import mongoose, { Schema } from 'mongoose'
import { UserData } from '../types'

const UserSchema = new Schema<UserData>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    gender: { type: String, required: true },
    applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  },
  { timestamps: true }
)

export const UserModel = mongoose.model('User', UserSchema)
