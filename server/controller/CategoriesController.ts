import { model } from '../model/CategoryModel'

import { Request, Response } from 'express'
const DefaultController = require('./DefaultController')

const Controller = new DefaultController(model)

// Get Methods
const getAllCategories = async (req: Request, res: Response) => Controller.getAll(req, res)

const getCategoryById = (id: string, callback: Function) => { }

const getCategoryByName = (name: string, callback: Function) => { }


// Create Methods
const createCategory = async (req: Request, res: Response) => {

    const { name, description, icon, color } = req?.body

    const validation = !name

    Controller.create(req, res, { name, description, icon, color }, validation)

}

// Update Methods
const updateCategory = async (req: Request, res: Response) => {

    const { name, description, icon, color, id } = req.body

    const validation = !name

    Controller.update(req, res, id, { name, description, icon, color, id }, validation)

}

// Delete Methods
const deleteCategoryById = (req: Request, res: Response) => {
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