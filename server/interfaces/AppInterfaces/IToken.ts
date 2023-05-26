import { Types } from "mongoose"

export default interface IToken {
    user_id: Types.ObjectId,
    email: string
}