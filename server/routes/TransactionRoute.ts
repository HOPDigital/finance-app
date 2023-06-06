import { getTransactionsByBoxId, getTransactionsByUserId, createTransaction, updateTransaction, deleteTransaction } from '../controller/TransactionController'

import { requireAuth } from '../middleware/auth';

const router = require("express").Router()


router.use(requireAuth)

router.post('/transactionsByBoxId', getTransactionsByBoxId)

router.post('/transactionsByUserId', getTransactionsByUserId)

router.post('/createTransactions', createTransaction)

router.patch('/updateTransaction', updateTransaction)

router.delete('/deleteTransaction', deleteTransaction)

export default router