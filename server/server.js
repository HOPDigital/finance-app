const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const UserRoute = require('./routes/UserRoute')

const app = express()
require('dotenv').config()

const { SERVER_PORT } = process.env

app.use(cors())
app.use(express.json())

app.use('/user', UserRoute)

app.listen(SERVER_PORT)
    .on('listening', () => console.log('SERVER IS UP'))


require('./config/database').connect()
