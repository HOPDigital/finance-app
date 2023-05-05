const UserModel = require('../model/UserModel').model
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUserById = async (req, res) => {
    const data = await UserModel.find({})
    res.status(200).json(data)
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
        )) { res.status(400).send('Missing required fields') }



        const old_user = await UserModel.findOne({ email })
        if (old_user) { res.status(409).send('User already exists'); return }

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
            process.env.TOKEN_KEY,
            { expiresIn: '2h' }
        )

        user.token = token
        console.log(user)

        res.status(200).json(user)
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