const UserModel = require('../model/UserModel').model
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Erros = require('../services/AppErrors')
const Success = require('../services/AppSuccess')
const Errors = require('../services/AppErrors')

const { signUser } = require('../middleware/auth')
const DefaultController = require('./DefaultController')

const Controller = new DefaultController(UserModel)

const getUserById = async (req, res) => {

    const data = await UserModel.find({})

    res.status(Success.USER_FOUND.status).json({ ...Success.USER_FOUND, data })

}

const authenticateUser = async (req, res) => {
    const { email, password } = req.body

    if (!(email && password)) { res.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS) }

    const encrypted_password = await bcrypt.hash(password, 10)

    try {
        const user = await UserModel.find({ email })

        if (user.password === encrypted_password) {
            const token = signUser(user)

            if (!token) res.status(Errors.INTERNAL_ERROR.status).json(Errors.INTERNAL_ERROR)

            else res.status(Success.TOKEN_CREATED.status).json({ ...Success.TOKEN_CREATED, token })
        }

    } catch (error) {
        res.status(Errors.NO_USER_FOUND.status).json(Errors.NO_USER_FOUND)
    }
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

        res.status(Success.USER_CREATED.status).json({ ...Success.USER_CREATED, user })
    }

    catch (err) {
        console.log(err)
        res.status(500).send('Error registering user')
    }
}

const updateUser = (req, res) => {
    const id = req.body.id

    const fields = req.body

    if (id) delete fields.id

    const validation = !(id && fields)

    Controller.update(req, res, id, fields, validation)
}

const deleteUser = (req, res) => {
    const { token } = req.body

    jwt.verify(token, process.env('SECRET'), (error, decoded) => {

        if (error || !decoded) {

            return res.status(Errors.TOKEN_AUTHENTICATE_ERROR.status).json(Errors.TOKEN_AUTHENTICATE_ERROR)

        }

        const { user_id } = decoded

        Controller.deleteById(req, res, user_id)

    })
}

module.exports = {
    getUserById,
    authenticateUser,
    createUser,
    updateUser,
    deleteUser
}