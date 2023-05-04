const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
    day: { type: Number, required: true },
    interval: { type: Number, required: true },
    discounts: [Number]
})


const model = mongoose.model('fixed_incomes', schema)
module.exports = { model, schema }