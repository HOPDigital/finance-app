import { getTransactionsByBoxId, getTransactionsByUserId, createTransaction, updateTransaction, deleteTransaction } from '../controller/TransactionController'

import { requireAuth } from '../middleware/auth';

const router = require("express").Router()


router.use(requireAuth)

router.get('/transactionsByBoxId/:id', getTransactionsByBoxId)

router.get('/transactionsByUserId/:id', getTransactionsByUserId)

router.post('/createTransactions', createTransaction)

router.patch('/updateTransaction', updateTransaction)

router.delete('/deleteTransaction/:id', deleteTransaction)

export default router