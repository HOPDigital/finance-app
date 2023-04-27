const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 8001

console.clear()

const app = express()

app.listen(PORT).on('listening', () => console.log('SERVER IS UP'))

app.get('/', (req, res) => {
    res.send('Hello World')
})