import mongoose from "mongoose"

import IUser from "../interfaces/UserInterface"

import { schema as CompanySchema } from './CompanyModel'
import { schema as MoneyBoxSchema } from './MoneyBox'

export const schema = new mongoose.Schema<IUser>({
    first_name: { type: String, required: true }, // André de Lara,
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }, // andrelara2002@gmail.com
    phone: Number, // +00 00 00000 0000
    birth_date: { type: String, required: true }, // 01/01/2000
    city: String, // São Bernardo do Campo
    country: { type: String, required: true }, // Brazil
    profile_picture: String, // base64,
    created_at: { type: Date, default: new Date() },
    companies: [CompanySchema],
    boxes: [MoneyBoxSchema]
})

export const model = mongoose.model<IUser>('user', schema)
