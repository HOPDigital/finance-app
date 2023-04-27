const mongoose = require('mongoose')

const user = {
    id: String,
    first_name: String, // André de Lara
    email: String, // andrelara2002@gmail.com
    phone: Number, // +00 00 00000 0000
    birth_date: Date, // 01/01/2000
    city: String, // São Bernardo do Campo
    country: String, // Brazil
    profile_picture: String, // base64
}

const UserModel = mongoose.model('user', new mongoose.Schema(user))
module.exports = UserModel