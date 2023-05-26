import mongoose from "mongoose"

import ITransaction from "../interfaces/TransactionInterface"

import { schema as CategorySchema } from "./CategoryModel"


export const schema = new mongoose.Schema<ITransaction>({
    value: { type: Number, required: true },
    currency: { type: String, default: 'usd' },
    type: { type: String, required: true }, // Invoice / Income
    date: Date,
    created_at: { type: Date, Default: new Date() },
    description: String,
    category: CategorySchema
})
export const model = mongoose.model<ITransaction>('transaction', schema)
