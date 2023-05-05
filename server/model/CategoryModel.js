const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    icon: String,
    color: { type: String, default: '#000000' }
})

const model = mongoose.model('category', schema)

module.exports = { model, schema }