const bcrypt = require('bcryptjs')

import { model as UserModel } from "../../model/UserModel";

import { signUser } from "../../middleware/auth";

import { logger } from "../../services/Logger";


async function getToken(email, password) {

    if (!(email && password)) { logger.error('No email or password given') }

    const encrypted_password = await bcrypt.hash(password, 10)

    try {
        const user = (await UserModel.find({ email }))[0]

        if (user.password === encrypted_password) {
            const token = signUser(user)

            if (!token) logger.error('No token generated')

            else return token
        }

    } catch (error) {
        logger.error('Could not generate token')
    }
}

module.exports = getToken