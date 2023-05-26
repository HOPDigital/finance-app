import mongoose from "mongoose"

import IFixedBill from "../interfaces/FixedBill"

const schema = new mongoose.Schema<IFixedBill>({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    interval: { type: Number, required: true },
    day: { type: Number, required: true },
})

const model = mongoose.model<IFixedBill>('fixed_bills', schema)


export { schema, model }