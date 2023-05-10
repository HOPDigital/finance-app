const jwt = require('jsonwebtoken')

const Errors = require('../services/AppErrors')


const requireAuth = (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!token) return res.status(Errors.NO_TOKEN_ERROR.status).json(Errors.NO_TOKEN_ERROR)

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status.send(500).json({ auth: false, message: 'Failed to authenticate token' })

        req.user_id = decoded.user_id
        next()
    })
}

module.exports = requireAuth