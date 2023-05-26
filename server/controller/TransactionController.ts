import { Request, Response, response } from 'express'

import { model as TransactionModel } from '../model/TransactionsModel'
import { model as UserModel } from '../model/UserModel'
import { model as BoxModel } from '../model/MoneyBox'

import ITransaction from '../interfaces/TransactionInterface'

import { Controller } from './DefaultController'

import handle from '../services/Messages'

import { ERRORS, SUCCESS } from '../services/Messages'


const DefaultController = new Controller(TransactionModel)

export const getTransactionsByUserId = async (req: Request, res: Response) => {

    const user_id = req?.params.id

    if (!user_id) return handle(ERRORS.NO_ID_RECEIVED, res)

    const user = await UserModel.findById(user_id)

    if (!user) return handle(ERRORS.NO_USER_FOUND, res)

    const transactions = user.boxes?.map(box => box.transactions)

    if (!transactions) return handle(ERRORS.NO_DATA_FOUND, res)

    handle(SUCCESS.DATA_GATHERED, res, transactions)

}


export const getTransactionsByBoxId = async (req: Request, res: Response) => {

    const { box_id } = req?.params

    if (!box_id) return handle(ERRORS.MISSING_FIELDS, res)

    const box = (await BoxModel.find({ _id: box_id }))[0]

    if (!box) return handle(ERRORS.NO_DATA_FOUND, res)

    const transactions = box?.transactions

    if (!transactions) return handle(ERRORS.NO_DATA_FOUND, res)

    handle(SUCCESS.DATA_GATHERED, res, transactions)
}


export const createTransaction = async (req: Request, res: Response) => {
    const box_id = req?.body.box_id

    if (!box_id) return handle(ERRORS.NO_ID_RECEIVED, res)

    try {
        const fields: ITransaction = req?.body.fields

        const box = await BoxModel.findById(box_id)

        if (!box) return handle(ERRORS.NO_DATA_FOUND, res)

        const transaction = new TransactionModel(fields)

        box?.transactions?.push(transaction)

        await box?.save()
            .then(() => handle(SUCCESS.DATA_CREATED, res, transaction.toObject))
    }
    catch (error) {
        return handle(ERRORS.INCORRECT_FIELDS, res)
    }
}

export const updateTransaction = async (req: Request, res: Response) => {
    const { transaction_id, fields } = req?.body

    await DefaultController.update(req, res, transaction_id, fields, !(transaction_id && fields))
}


export const deleteTransaction = async (req: Request, res: Response) => {
    const { transaction_id } = req?.body

    await DefaultController.deleteById(req, res, transaction_id)
}