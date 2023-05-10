const router = require('express').Router()
const { getBoxId, createBox, updateBox, deleteBox } = require('../controller/BoxController')

// -- Get boxes of user
router.get('/:id', (req, res) => getBoxId(req, res, req?.params.id))

// -- Create a new box in user
router.post('/create', (req, res) => createBox(req, res, req?.body.id, fields = req?.body))

// -- Update a existing box
router.patch('/update', (req, res) => updateBox(req, res, req?.body.id, req?.body.box_id, req?.body))

// -- Remove a existing box
router.delete('/delete', (req, res) => deleteBox(req, res, req?.body.user_id, req?.body.box_id))

module.exports = router
