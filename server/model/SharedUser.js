const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    user_id: { type: String, required: true },
    access_level: { type: Number, default: 1 }
})


const model = new mongoose.model('shared_user', schema)
module.exports = { schema, model }