const CategoryModel = require('../model/CategoryModel').model
const DefaultController = require('./DefaultController')

const Controller = new DefaultController(CategoryModel)

// Get Methods
const getAll = async (req, res) => Controller.getAll(req, res)

const getById = (id, callback) => { }

const getByName = (name, callback) => { }


// Create Methods
const create = async (req, res) => {

    const { name, description, icon, color } = req?.body

    const validation = !name

    Controller.create(req, res, { name, description, icon, color }, validation)

}

// Update Methods
const update = async (req, res) => {

    const { name, description, icon, color, id } = req.body

    const validation = !name

    Controller.update(req, res, id, { name, description, icon, color, id }, validation)

}

// Delete Methods
const deleteById = (req, res) => {
    const { id } = req?.body

    Controller.deleteById(req, res, id)
}

module.exports = { getAll, getById, getByName, create, update, deleteById }