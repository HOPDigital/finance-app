const morgan = require('morgan')
const winston = require('winston')

import { Request, Response, NextFunction } from "express"

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: '../logs/logs.log' })
    ]
})


export function logMiddleWare(req: Request, res: Response, next: NextFunction) {
    logger.info(`${req.method} ${req.url}`)
    next()
}

export { logger }