const jwt = require('jsonwebtoken')

import { Request, Response, NextFunction } from "express"
import { Errors } from "../services/AppErrors"

import IToken from "../interfaces/AppInterfaces/IToken"
import IUser from "../interfaces/UserInterface"

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token']

    if (!token) return res.status(Errors.NO_TOKEN_ERROR.status).json(Errors.NO_TOKEN_ERROR)

    jwt.verify(token, process.env.SECRET, (err: Error, decoded: IToken) => {
        if (err) {
            return res
                .status(Errors.FAILED_TO_AUTHENTICATE_TOKEN.status)
                .json(Errors.FAILED_TO_AUTHENTICATE_TOKEN)
        }
        req.params.user_id = decoded.user_id.toString()

        next()
    })
}

const signUser = (user: IUser) => {

    if (!user) return undefined

    jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.SECRET,
        { expiresIn: '2h' }
    )
}




export { requireAuth, signUser }