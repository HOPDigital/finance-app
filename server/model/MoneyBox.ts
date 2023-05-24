
import mongoose from 'mongoose'

import IBox from '../interfaces/BoxInterface'

import { schema as CardSchema } from './CardModel'
import { schema as TransactionSchema } from './TransactionsModel'
import { schema as FixedIncomesSchema } from './FixedIncomes'
import { schema as FixedBillsSchema } from './FixedBills'


export const schema = new mongoose.Schema<IBox>({
    name: { type: String, required: true },
    description: String,
    created_at: { type: Date, default: new Date() },
    target: Number,
    balance: Number,
    currency: String,
    background_image: String,
    box_image: String,
    card: [CardSchema],
    transactions: [TransactionSchema],
    fixed_bills: [FixedBillsSchema],
    fixed_incomes: [FixedIncomesSchema]
})

export const model = mongoose.model<IBox>('money_box', schema)