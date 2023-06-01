import { Response, Request } from 'express'

import { model as MoneyBoxModel } from '../model/MoneyBox'
import { model as UserModel } from '../model/UserModel'

import { ERRORS, SUCCESS } from '../services/Messages'

import handle from '../services/Messages'

import { logger } from '../services/Logger'

/**
 * Get Boxes of User
 * 
 * @param {Object} req - The request of express
 * @param {Object} res - The response of express
 * @param {string} user_id - User ID to update
 */
export const getBoxesByUserId = async (req: Request, res: Response) => {

    const user_id = req?.params.id

    if (!user_id) return handle(ERRORS.NO_ID_RECEIVED, res)

    const user = await UserModel.findById(user_id)

    if (!user) return handle(ERRORS.NO_USER_FOUND, res)

    const boxes = user.boxes

    return handle(SUCCESS.DATA_GATHERED, res, boxes)
}

export const getBoxesById = async (req: Request, res: Response) => {
    const box_id = req?.params.id

    if (!box_id) return handle(ERRORS.NO_ID_RECEIVED, res)

    const box = await MoneyBoxModel.findById(box_id)

    if (!box) return handle(ERRORS.NO_DATA_FOUND, res)

    return handle(SUCCESS.DATA_GATHERED, res, box)
}

/**
 * Create a new MoneyBox for a User document
 *
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {string} user_id - The _id of the User document to add the MoneyBox to
 * @param {Object} fields - The fields and values of the MoneyBox to create
 */
export const createBox = async (req: Request, res: Response) => {

    const { user_id, fields } = req?.body
    const { name } = fields

    if (!user_id) { return handle(ERRORS.NO_ID_RECEIVED, res) }

    if (!name) { return handle(ERRORS.MISSING_FIELDS, res) }

    const user = await UserModel.findById(user_id)

    if (!user) { return handle(ERRORS.NO_USER_FOUND, res) }

    try {
        const box = new MoneyBoxModel({ name, ...fields })

        user?.boxes?.push(box)

        await user.save()
            .then(() => handle(SUCCESS.DATA_CREATED, res, box))

    } catch (error) {
        logger.error(error)
        handle(ERRORS.ERROR_CREATING_DATA, res)
    }

}


/**
 * Update an existing MoneyBox  for a User document
 *
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {string} user_id - The _id of the User document that the MoneyBox belongs to
 * @param {string} box_id - The _id of the MoneyBox subdocument to update
 * @param {Object} fields - The fields and values of the MoneyBox to update
 */
export const updateBox = async (req: Request, res: Response) => {

    const { user_id, box_id, fields } = req?.body

    if (!(user_id && box_id)) { res?.status(401).send('No user ID'); return }

    if (!fields) { res?.status(401).send('Missing required fields'); return }
    if ((fields?.name && fields.name === '')) { res?.status(401).send('Missing required fields'); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(409).send('No user found'); return }


    const filter = { _id: user_id, "boxes._id": box_id };
    const update = { $set: fields };

    try {
        const result = await UserModel.updateOne(filter, update);

        if (result.modifiedCount === 0) {
            res?.status(409).send('No user or money box found');
            return;
        }

        res?.status(200).json({ message: 'Money box updated' });

    } catch (error) {
        console.log(error);
        res?.status(500).send('Error updating money box');

    }
}


/**
 * Delete an existing MoneyBox subdocument from a User document
 *
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @param {string} user_id - The _id of the User document that the MoneyBox belongs to
 * @param {string} box_id - The _id of the MoneyBox subdocument to delete
 */
export const deleteBox = async (req: Request, res: Response) => {

    const { user_id, box_id } = req.body

    const filter = { _id: user_id }
    const update = { $pull: { boxes: { _id: box_id } } }

    try {
        const result = await UserModel.updateOne(filter, update);

        if (result.modifiedCount === 0) {
            res?.status(409).send('No user or money box found');
            return;
        }

        res?.status(200).json({ message: 'Money box deleted' });
    } catch (error) {
        console.log(error);
        res?.status(500).send('Error deleting money box');
    }
}