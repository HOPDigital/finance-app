import { model as CategoryModel } from '../model/CategoryModel'

import { Request, Response } from 'express'

import { Controller } from './DefaultController'

const DefaultController = new Controller(CategoryModel)

// Get Methods
const getAllCategories = async (req: Request, res: Response) => DefaultController.getAll(req, res)

const getCategoryById = (id: string, callback: Function) => { }

const getCategoryByName = (name: string, callback: Function) => { }


// Create Methods
const createCategory = async (req: Request, res: Response) => {

    const { name, description, icon, color } = req?.body

    const validation = !name

    DefaultController.create(req, res, { name, description, icon, color }, validation)

}

// Update Methods
const updateCategory = async (req: Request, res: Response) => {

    const { name, description, icon, color, id } = req.body

    const validation = !name

    DefaultController.update(req, res, id, { name, description, icon, color, id }, validation)

}

// Delete Methods
const deleteCategoryById = (req: Request, res: Response) => {
    const { id } = req?.body

    DefaultController.deleteById(req, res, id)
}

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByName,
    createCategory,
    updateCategory,
    deleteCategoryById
}