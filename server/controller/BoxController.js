const MoneyBoxModel = require('../model/MoneyBox').model
const UserModel = require('../model/UserModel').model


/**
 * Get Boxes of User
 * 
 * @param {Object} req - The request of express
 * @param {Object} res - The response of express
 * @param {string} user_id - User ID to update
 */
const getBoxId = async (req, res, user_id) => {

    if (!user_id) { res?.status(401).send('No user ID'); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(409).send('No user found'); return }

    const boxes = user.boxes

    res?.status(200).json(boxes)
}

/**
 * Create a new MoneyBox for a User document
 *
 * @param {Object} req - The express request object
 * @param {Object} res - The express response object
 * @param {string} user_id - The _id of the User document to add the MoneyBox to
 * @param {Object} fields - The fields and values of the MoneyBox to create
 */
const createBox = async (req, res, user_id, fields) => {

    if (!user_id) { res?.status(401).send('No user ID'); return }

    if (!fields?.name) { res?.status(401).send('Missing required fields'); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(409).send('No user found'); return }

    try {
        const box = new MoneyBoxModel(fields)

        user.boxes.push(box)

        await user.save()
            .then(() => res?.status(200).json(box))

    } catch (error) {
        console.log(error)
        res?.status(500).send('Error creating box')
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
const updateBox = async (req, res, user_id, box_id, fields) => {

    if (!(user_id && box_id)) { res?.status(401).send('No user ID'); return }

    if (fields?.name && fields.name === '') { res?.status(401).send('Missing required fields'); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(409).send('No user found'); return }


    const filter = { _id: user_id, "boxes._id": box_id };
    const update = { $set: fields };

    try {
        const result = await UserModel.updateOne(filter, update);

        if (result.nModified === 0) {
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
const deleteBox = async (req, res, user_id, box_id) => {

    const filter = { _id: user_id }
    const update = { $pull: { boxes: { _id: box_id } } }

    try {
        const result = await UserModel.updateOne(filter, update);

        if (result.nModified === 0) {
            res?.status(409).send('No user or money box found');
            return;
        }

        res?.status(200).json({ message: 'Money box deleted' });
    } catch (error) {
        console.log(error);
        res?.status(500).send('Error deleting money box');
    }
}

module.exports = {
    getBoxId,
    createBox,
    updateBox,
    deleteBox
}