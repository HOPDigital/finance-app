import { Types } from "mongoose"

import Box from "./BoxInterface"
import Company from "./Company"

export default interface IUser {
    _id: Types.ObjectId,
    first_name: string,
    last_name: string,
    password: string
    email: string,
    phone?: number,
    birth_date: string,
    city?: string,
    country: string,
    profile_picture?: string,
    created_at: Date,
    companies?: Array<Company>,
    boxes?: Array<Box>
}

export interface IUserToken extends IUser {
    token: string
}