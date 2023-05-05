const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    flag: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: Number, required: true },
    date: { type: Date, default: new Date() },
    balance: { type: Number, default: 0 }
})

const model = mongoose.model('card', schema)
module.exports = { model, schema }