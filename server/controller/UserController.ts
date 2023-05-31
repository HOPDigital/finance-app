const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

import handle, { ERRORS, SUCCESS } from '../services/Messages'

import { signUser } from '../middleware/auth'
import { Controller } from './DefaultController'

import { model as UserModel } from '../model/UserModel'

import { Request, Response } from 'express'

import { IUserToken } from '../interfaces/UserInterface'


const DefaultController = new Controller(UserModel)


const getUserById = async (req: Request, res: Response) => {

    const user = (await UserModel.find({}))[0]

    if (!user) return handle(ERRORS.NO_USER_FOUND, res)

    handle(SUCCESS.USER_FOUND, res, user)

}

const authenticateUser = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!(email && password)) { res.status(ERRORS.MISSING_FIELDS.status).json(ERRORS.MISSING_FIELDS) }

    const encrypted_password = await bcrypt.hash(password, 10)

    try {
        const user = (await UserModel.find({ email }))[0]

        if (user.password === encrypted_password) {
            const token = signUser(user)

            if (!token) res.status(ERRORS.INTERNAL_ERROR.status).json(ERRORS.INTERNAL_ERROR)

            else res.status(SUCCESS.TOKEN_CREATED.status).json({ ...SUCCESS.TOKEN_CREATED, token })
        }

    } catch (error) {
        res.status(ERRORS.NO_USER_FOUND.status).json(ERRORS.NO_USER_FOUND)
    }
}

const createUser = async (req: Request, res: Response) => {
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
        )) { res.status(ERRORS.MISSING_FIELDS.status).json(ERRORS.MISSING_FIELDS) }



        const old_user = await UserModel.findOne({ email })

        if (old_user) { res.status(ERRORS.USER_ALREADY_EXISTS.status).json(ERRORS.USER_ALREADY_EXISTS); return }

        const encrypted_password = await bcrypt.hash(password, 10)

        const user: IUserToken = (await UserModel.create({
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

        res.status(SUCCESS.USER_CREATED.status).json({ ...SUCCESS.USER_CREATED, user })
    }

    catch (err) {
        console.log(err)
        res.status(500).send('Error registering user')
    }
}

const updateUser = (req: Request, res: Response) => {
    const id = req.body.id

    const fields = req.body

    if (id) delete fields.id

    const validation = !(id && fields)

    DefaultController.update(req, res, id, fields, validation)
}

const deleteUser = (req: Request, res: Response) => {
    const { token } = req.body

    jwt.verify(token, process.env.SECRET, (error: Error, decoded: any) => {

        if (error || !decoded) {

            return res.status(ERRORS.TOKEN_AUTHENTICATE_ERROR.status).json(ERRORS.TOKEN_AUTHENTICATE_ERROR)

        }

        const { user_id } = decoded

        DefaultController.deleteById(req, res, user_id)

    })
}

module.exports = {
    getUserById,
    authenticateUser,
    createUser,
    updateUser,
    deleteUser
}