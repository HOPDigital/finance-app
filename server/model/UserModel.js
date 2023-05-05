const mongoose = require('mongoose')

const CompanySchema = require('./CompanyModel').schema
const MoneyBox = require('./MoneyBox').schema

const schema = new mongoose.Schema({
    first_name: { type: String, required: true }, // André de Lara,
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }, // andrelara2002@gmail.com
    phone: Number, // +00 00 00000 0000
    birth_date: { type: String, required: true }, // 01/01/2000
    city: String, // São Bernardo do Campo
    country: { type: String, required: true }, // Brazil
    profile_picture: String, // base64,
    created_at: { type: Date, default: new Date().toISOString() },
    companies: [CompanySchema],
    boxes: [MoneyBox]
})

const model = mongoose.model('user', schema)
module.exports = { model, schema }