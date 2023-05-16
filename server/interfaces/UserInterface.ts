import Box from "./BoxInterface"
import Company from "./Company"

export default interface User {
    first_name: string,
    last_name: string,
    password: string
    email: string,
    phone?: number,
    birth_date: string,
    city?: string,
    country: string,
    profile_picture?: string,
    created_at: string,
    companies?: Array<Company>,
    boxes?: Array<Box>
}