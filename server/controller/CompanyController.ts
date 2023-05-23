import Success from "../services/AppSuccess"
import Errors from "../services/AppErrors"

import { model as UserModel } from "../model/UserModel"
import { model as CompanyModel } from "../model/CompanyModel"

import { Controller as DefaultController } from "./DefaultController"


const Controller = new DefaultController(CompanyModel)

const getAllCompanies = async (req: any, res: any) => Controller.getAll(req, res)

const getCompanyByUserId = async (req: any, res: any) => {

    const user_id = req?.params.id

    if (!user_id) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(Errors.NO_USER_FOUND.status).json(Errors.NO_USER_FOUND); return }

    const boxes = user.boxes

    res?.status(Success.COMPANY_FOUND.status).json({ ...Success.COMPANY_FOUND, data: boxes })

}

const createCompany = async (req: any, res: any) => {

    const { user_id, fields } = req?.body
    const { name } = fields

    if (!(user_id && name)) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(Errors.NO_USER_FOUND.status).json(Errors.NO_USER_FOUND); return }

    try {
        const box = new CompanyModel({ name, ...fields })

        user.boxes.push(box)

        await user.save()
            .then(() => res?.status(200).json(box))

    } catch (error) {
        console.log(error)
        res?.status(500).send('Error creating box')
    }

    const updateCompany = async (req: any, res: any) => {

        const { user_id, company_id, fields } = req?.body

        if (!(user_id && company_id && !fields && fields.name && fields.name !== '')) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

        const user = await UserModel.findById(user_id)

        if (!user) { res?.status(409).send('No user found'); return }


        const filter = { _id: user_id, "companies._id": company_id };
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

}