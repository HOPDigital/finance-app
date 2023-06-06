const router = require("express").Router()
const { getUserById, authenticateUser, createUser, updateUser, deleteUser } = require("../controller/UserController")

const requireAuth = require('../middleware/auth').requireAuth

// - Authenticate user
router.post('/login', authenticateUser)

// - Create user
router.post('/register', createUser)

// - Middleware
router.use(requireAuth)

// - Get User by ID
router.get('/:id', getUserById)

// - Update user
router.patch('/:id', updateUser)

// - Delete user
router.delete('/:id', deleteUser)

export default router