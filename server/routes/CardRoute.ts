import { createCard, deleteCard, updateCard, getAllCardsByBox, getCardById } from "../controller/CardController";

import { requireAuth } from "../middleware/auth";

const router = require("express").Router()


router.use(requireAuth)

router.get('/getByBoxId/:box_id', getAllCardsByBox)

router.get('/getCardById/:card_id', getCardById)

router.delete('/delete/:card_id', deleteCard)

router.post('/create', createCard)

router.patch('/update', updateCard)

export default router