const UserModel = require('../model/UserModel').model
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Erros = require('../services/AppErrors')
const Success = require('../services/AppSuccess')
const Errors = require('../services/AppErrors')

const getUserById = async (req, res) => {
    const data = await UserModel.find({})
    res.status(Success.USER_FOUND.status).json({ ...Success.USER_FOUND, data })
}

const authenticateUser = (req, res) => {

}

const createUser = async (req, res) => {
    try {
        const {
            email,
            password,
            first_name,
            last_name,
            birth_date,
            city,
            country,
            phone,
            profile_picture
        } = req.body

        if (!(
            email
            && password
            && first_name
            && last_name
            && birth_date
            && country
        )) { res.status(Errors.MISSING_FIELDS.status).json(Erros.MISSING_FIELDS) }



        const old_user = await UserModel.findOne({ email })
        if (old_user) { res.status(Erros.USER_ALREADY_EXISTS.status).json(Errors.USER_ALREADY_EXISTS); return }

        const encrypted_password = await bcrypt.hash(password, 10)

        const user = (await UserModel.create({
            first_name,
            last_name,
            phone,
            city,
            country,
            birth_date,
            profile_picture,
            email: email.toLowerCase(),
            password: encrypted_password,
        })).toObject()

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.SECRET,
            { expiresIn: '2h' }
        )

        user.token = token
        console.log(user)

        res.status(Success.USER_CREATED.status).json({ ...Success.USER_CREATED, user })
    }

    catch (err) {
        console.log(err)
        res.status(500).send('Error registering user')
    }
}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

module.exports = {
    getUserById,
    authenticateUser,
    createUser,
    updateUser,
    deleteUser
}