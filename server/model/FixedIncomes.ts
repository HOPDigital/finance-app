import mongoose from "mongoose"

import IFixedIncome from "../interfaces/FixedIncome"

export const schema = new mongoose.Schema<IFixedIncome>({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    day: { type: Number, required: true },
    interval: { type: Number, required: true },
    discounts: [Number]
})


export const model = mongoose.model<IFixedIncome>('fixed_incomes', schema)
