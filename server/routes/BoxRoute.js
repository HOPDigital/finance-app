const router = require('express').Router()
const { getBoxesByUserId, createBox, updateBox, deleteBox } = require('../controller/BoxController')

const { requireAuth } = require('../middleware/auth')

//Middleware
router.use(requireAuth)

// -- Get boxes of user
router.get('/:id', getBoxesByUserId)

// -- Create a new box in user
router.post('/create', createBox)

// -- Update a existing box
router.patch('/update', updateBox)

// -- Remove a existing box
router.delete('/delete', deleteBox)

module.exports = router
