import mongoose from "mongoose"

export const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    icon: String,
    color: { type: String, default: '#000000' }
})

export const model = mongoose.model('category', schema)

