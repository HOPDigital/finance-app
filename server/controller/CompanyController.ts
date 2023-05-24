import { Success } from "../services/AppSuccess"
import { Errors } from "../services/AppErrors"

import { model as UserModel } from "../model/UserModel"
import { model as CompanyModel } from "../model/CompanyModel"

import { Controller as DefaultController } from "./DefaultController"

import { Request, Response } from "express"


const Controller = new DefaultController(CompanyModel)

export const getAllCompanies = async (req: Request, res: Response) => Controller.getAll(req, res)

export const getCompanyByUserId = async (req: Request, res: Response) => {

    const user_id = req?.params.id

    if (!user_id) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(Errors.NO_USER_FOUND.status).json(Errors.NO_USER_FOUND); return }

    const boxes = user.boxes

    res?.status(Success.COMPANY_FOUND.status).json({ ...Success.COMPANY_FOUND, data: boxes })

}

export const createCompany = async (req: Request, res: Response) => {

    const { user_id, fields } = req?.body
    const { name } = fields

    if (!(user_id && name)) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(Errors.NO_USER_FOUND.status).json(Errors.NO_USER_FOUND); return }

    try {
        const box = new CompanyModel({ name, ...fields })

        user?.companies?.push(box)

        await user.save()
            .then(() => res?.status(Success.COMPANY_CREATED.status).json({ ...Success.COMPANY_CREATED, data: box }))

    } catch (error) {
        console.log(error)
        res?.status(Errors.COMPANY_NOT_CREATED.status).json(Errors.COMPANY_NOT_CREATED)
    }

}

export const updateCompany = async (req: Request, res: Response) => {

    const { user_id, company_id, fields } = req?.body

    if (!(user_id && company_id && !fields && fields.name && fields.name !== '')) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

    const user = await UserModel.findById(user_id)

    if (!user) { res?.status(Errors.NO_USER_FOUND.status).json(Errors.NO_USER_FOUND); return }


    const filter = { _id: user_id, "companies._id": company_id };
    const update = { $set: fields };

    try {
        const result = await UserModel.updateOne(filter, update);

        if (result.modifiedCount === 0) {
            res?.status(Errors.NO_DATA_FOUND.status).json(Errors.NO_DATA_FOUND);
            return;
        }

        res?.status(Success.COMPANY_UPDATED.status).json(Success.COMPANY_UPDATED);

    } catch (error) {
        console.log(error);
        res?.status(Errors.COMPANY_NOT_UPDATED.status).json(Errors.COMPANY_NOT_UPDATED);

    }
}