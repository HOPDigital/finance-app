const router = require('express').Router()
const { getAllCategories, getCategoryById, getCategoryByName, createCategory, updateCategory, deleteCategoryById, } = require('../controller/CategoriesController')

router.get('/', getAllCategories)

router.get('/:id', getCategoryById)

router.get('/:name', getCategoryByName)

router.post('/create', createCategory)

router.patch('/update', updateCategory)

router.delete('/delete', deleteCategoryById)

module.exports = router