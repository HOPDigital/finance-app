import Category from "./Category";

import { Types } from "mongoose";


export default interface ITransaction {
    _id: Types.ObjectId
    value: number,
    currency: string,
    type: string,
    date: Date,
    created_at: Date,
    description?: string,
    category: Category
}