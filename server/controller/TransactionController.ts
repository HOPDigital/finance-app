import { Request, Response, response } from 'express'

import { model as TransactionModel } from '../model/TransactionsModel'
import { model as UserModel } from '../model/UserModel'
import { model as BoxModel } from '../model/MoneyBox'
import { model as CategoryModel } from '../model/CategoryModel'

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

    await DefaultController
        .getNested(req, res,
            {
                parent_field: 'transactions',
                parent_model: BoxModel,
                parent_id: box_id,
            }
        )
}


export const createTransaction = async (req: Request, res: Response) => {
    const { box_id, fields } = req?.body

    const { category_id } = fields

    if (category_id) {
        const category = await CategoryModel.findById
        fields.transaction = category
    }

    await DefaultController
        .createNested(req, res,
            {
                validation: !(box_id && fields),
                parent_model: BoxModel,
                parent_field: 'transactions'
            }
        )
}

export const updateTransaction = async (req: Request, res: Response) => {
    const { transaction_id, fields } = req?.body

    await DefaultController.update(req, res, transaction_id, fields, !(transaction_id && fields))
}


export const deleteTransaction = async (req: Request, res: Response) => {
    const { transaction_id } = req?.params

    await DefaultController.deleteById(req, res, transaction_id)
}