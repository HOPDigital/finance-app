const CategoryModel = require('../model/CategoryModel').model
const DefaultController = require('./DefaultController')

const Controller = new DefaultController(CategoryModel)

// Get Methods
const getAllCategories = async (req, res) => Controller.getAll(req, res)

const getCategoryById = (id, callback) => { }

const getCategoryByName = (name, callback) => { }


// Create Methods
const createCategory = async (req, res) => {

    const { name, description, icon, color } = req?.body

    const validation = !name

    Controller.create(req, res, { name, description, icon, color }, validation)

}

// Update Methods
const updateCategory = async (req, res) => {

    const { name, description, icon, color, id } = req.body

    const validation = !name

    Controller.update(req, res, id, { name, description, icon, color, id }, validation)

}

// Delete Methods
const deleteCategoryById = (req, res) => {
    const { id } = req?.body

    Controller.deleteById(req, res, id)
}

module.exports = { 
    getAllCategories,
    getCategoryById,
    getCategoryByName,
    createCategory,
    updateCategory,
    deleteCategoryById
}