import mongoose from "mongoose"

import ICard from "../interfaces/CardInterface"


export const schema = new mongoose.Schema<ICard>({
    flag: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: Number, required: true },
    date: { type: Date, default: new Date() },
    balance: { type: Number, default: 0 }
})

export const model = mongoose.model<ICard>('card', schema)
