const jwt = require('jsonwebtoken')


/**
 * Example
 * 
 * jwtSecret: "pizzaapp@secret2022",
 * jwtExpiration: 3600
*/

class JsonWebToken {

    constructor({ jwtSecret, jwtExpiration }) {
        this.settings = { jwtSecret, jwtExpiration }
    }


    //Authenticate with token
    verifyToken({ token, secret } = { secret: this.settings.jwtSecret }, callback) {
        let response = []

        if (!token) {
            response = { message: 'No token provided', status: 400, success: false };
            return
        }

        jwt.verify(token, secret, function (err, decoded) {

            if (err) response = [undefined, { message: 'Error decoding token', status: 500, success: false }]
            else response = [{ status: 200, id: decoded, auth: true, success: true }, undefined]
        })
        return response
    }

    //Authenticating with token and then decoding token
    verifyAndDecode(token) {
        let response

        try {
            response = [jwt.verify(token, this.settings.jwtSecret), undefined]
        } catch (err) {
            response = [undefined, err]
        }

        return response
    }
}


module.exports = JsonWebToken
