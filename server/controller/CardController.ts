import { model as CardModel } from '../model/CardModel'
import { model as BoxModel } from '../model/MoneyBox'

import { Request, Response } from 'express'

import { Controller } from './DefaultController'
import handle, { ERRORS, SUCCESS } from '../services/Messages'

const DefaultController = new Controller(CardModel)

export async function getAllCardsByBox(req: Request, res: Response) {

    const { box_id } = req?.body

    if (!box_id) return handle(ERRORS.NO_ID_RECEIVED, res)

    const box = await BoxModel.findById(box_id)

    if (!box) return handle(ERRORS.NO_DATA_FOUND, res)

    return handle(SUCCESS.DATA_GATHERED, res, box?.card)
}


export async function getCardById(req: Request, res: Response) {
    const { card_id } = req?.body

    if (!card_id) return handle(ERRORS.NO_ID_RECEIVED, res)

    const card = await CardModel.findById(card_id)

    return handle(SUCCESS.DATA_GATHERED, res, card)
}


export async function createCard(req: Request, res: Response) {

    const { fields: { name, flag, number } } = req?.body

    const validation = !(name && flag && number)

    await DefaultController.createNested(req, res, { parent_model: BoxModel, parent_field: 'card', validation })
}


export async function updateCard(req: Request, res: Response) {

    const { id, fields } = req?.body

    await DefaultController.update(req, res, id, fields)

}


export async function deleteCard(req: Request, res: Response) {

    const { id } = req?.body

    await DefaultController.deleteById(req, res, id)
}