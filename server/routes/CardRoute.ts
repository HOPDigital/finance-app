import { createCard, deleteCard, updateCard, getAllCardsByBox, getCardById } from "../controller/CardController";

import { requireAuth } from "../middleware/auth";

const router = require("express").Router()


router.use(requireAuth)

router.get('/getByBoxId/:id', getAllCardsByBox)

router.use('/getCardById/:id', getCardById)

router.delete('/delete', deleteCard)

router.post('/create', createCard)

router.patch('/update', updateCard)

export default router