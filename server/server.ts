import { logger, logMiddleWare } from "./services/Logger"
import connectToDataBase from "./config/database"

const express = require('express')
const cors = require('cors')

import UserRoute from './routes/UserRoute'
import MoneyBoxRoute from './routes/BoxRoute'
import CompanyRoute from './routes/CompanyRoute'
import CardRoute from './routes/CardRoute'
import TransactionRoute from './routes/TransactionRoute'

const morgan = require('morgan')
const swaggerUi = require("swagger-ui-express");

import { specs } from "./services/Swagger"

const app = express()
require('dotenv').config()

const { SERVER_PORT, MONGO_URI } = process.env

if (!(SERVER_PORT && MONGO_URI)) {
    logger.error('environment variables not set')
    logger.info(process.env)
    process.exit(1)
}

app.use(morgan('combined'))
app.use(logMiddleWare)

app.use(cors())
app.use(express.json())

app.use('/user', UserRoute)
app.use('/boxes', MoneyBoxRoute)
app.use('/transactions', TransactionRoute)
app.use('/companies', CompanyRoute)
app.use('/cards', CardRoute)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.listen(SERVER_PORT).on('listening', () => logger.info('server is up on port: ' + SERVER_PORT))

connectToDataBase(MONGO_URI)

module.exports = app