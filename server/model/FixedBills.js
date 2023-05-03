const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    day: Number,
    interval: Number
})

const model = mongoose.model('fixed_bills', schema)

module.exports = { schema, model }