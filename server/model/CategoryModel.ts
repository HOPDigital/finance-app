import mongoose from "mongoose"

import ICategory from "../interfaces/Category"

export const schema = new mongoose.Schema<ICategory>({
    name: { type: String, required: true },
    description: String,
    icon: String,
    color: { type: String, default: '#000000' }
})

export const model = mongoose.model<ICategory>('category', schema)

