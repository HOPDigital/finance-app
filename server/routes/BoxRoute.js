const router = require('express').Router()
const { create, get, update, remove } = require('../controller/BoxController')

// -- Get boxes of user
router.get('/:id', (req, res) => get(req, res, req?.params.id))

// -- Create a new box in user
router.post('/create', (req, res) => create(req, res, req?.body.id, fields = req?.body))

// -- Update a existing box
router.patch('/update', (req, res) => update(req, res, req?.body.id, req?.body.box_id, req?.body))

// -- Remove a existing box
router.delete('/delete', (req, res) => remove(req, res, req?.body.user_id, req?.body.box_id))

module.exports = router
