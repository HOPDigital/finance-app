const mongoose = require('mongoose')

const SharedUser = require('./SharedUser').schema

const schema = new mongoose.Schema({
    public_id: String,
    name: { type: String, required: true },
    description: String,
    logotype: String,
    hero: String,
    shared_data: {
        is_shared: { type: Boolean, default: false },
        users: [SharedUser]
    }

})

const model = mongoose.model('company', schema)

module.exports = { schema, model }