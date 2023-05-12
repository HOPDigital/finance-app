const router = require('express').Router()
const { getBoxesByUserId, createBox, updateBox, deleteBox } = require('../controller/BoxController')

const { requireAuth } = require('../middleware/auth')

//Middleware
router.use(requireAuth)

// -- Get boxes of user
router.get('/:id', (req, res) => getBoxesByUserId(req, res))

// -- Create a new box in user
router.post('/create', (req, res) => createBox(req, res))

// -- Update a existing box
router.patch('/update', (req, res) => updateBox(req, res))

// -- Remove a existing box
router.delete('/delete', (req, res) => deleteBox(req, res))

module.exports = router
