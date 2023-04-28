const router = require("express").Router()
const { getUserById, authenticateUser, createUser, updateUser, deleteUser } = require("../controller/UserController")

// - Get User by ID
router.get('/:id', getUserById)

// - Authenticate user
router.post('/login', authenticateUser)

// - Create user
router.post('/register', createUser)

// - Update user
router.patch('/:id', updateUser)

// - Delete user
router.delete('/:id', deleteUser)

module.exports = router