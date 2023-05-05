const app = require('express').Router()
const { getAll, getById, getByName, create, update, deleteById } = require('../controller/CategoriesController')

app.get('/', (req, res) => getAll(req, res))

app.post('/create', (req, res) => create(req, res))

app.patch('/update', (req, res) => update(req, res))

app.delete('/delete', (req, res) => deleteById(req, res))

module.exports = app