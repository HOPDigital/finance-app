const mongoose = require('mongoose')

const CardModel = require('./CardModel').schema
const FixedBillsModel = require('./FixedBills').schema
const TransactionModel = require('./TransactionsModel').schema
const FixedIncomes = require('./FixedIncomes').schema

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    created_at: { type: Date, default: new Date() },
    target: Number,
    balance: Number,
    currency: String,
    background_image: String,
    box_image: String,
    card: [CardModel],
    transactions: [TransactionModel],
    fixed_bills: [FixedBillsModel],
    fixed_incomes: [FixedIncomes]
})

const model = mongoose.model('money_box', schema)

module.exports = { schema, model }