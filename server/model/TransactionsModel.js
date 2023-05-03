const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    value: { type: Number, required: true },
    currency: { type: String, default: 'usd' },
    type: { type: String, required: true }, // Invoice / Income
    date: Date,
    created_at: { type: Date, Default: new Date() },
    description: String,
    category: String
})
const model = mongoose.model('transaction', schema)
module.exports = { model, schema }