import { logger, logMiddleWare } from "./services/Logger"
import connectToDataBase from "./config/database"

const express = require('express')
const cors = require('cors')

const UserRoute = require('./routes/UserRoute')
const MoneyBoxRoute = require('./routes/BoxRoute')
const CategoryRoute = require('./routes/CategoriesRoute')

const morgan = require('morgan')

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
app.use('/categories', CategoryRoute)

app.listen(SERVER_PORT)
    .on('listening', () => logger.info('server is up on port: ' + SERVER_PORT))


connectToDataBase(MONGO_URI)


module.exports = app
