import { ObjectId } from "mongoose"

import { Request, Response } from "express"

import { Errors } from "../services/AppErrors"
import { Success } from "../services/AppSuccess"

export class Controller {

    model: any

    constructor(model: any) {
        this.model = model
    }


    // Get Methods
    getAll = async (req: Request, res: Response) => {

        await new this.model.find({})
            .then((data: Object) => res?.status(Success.DATA_GATHERED.status).json({ ...Success.DATA_GATHERED, data }))
            .catch(() => res?.status(Errors.ERROR_RETRIEVING_DATA.status).json(Errors.ERROR_RETRIEVING_DATA))

    }

    // Create Methods
    create = async (req: Request, res: Response, fields: Object, validation: boolean) => {

        if (validation) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS) }

        await new this.model.create(fields)
            .then((data: any) => res.status(Success.DATA_CREATED.status).json(data.toObject()))
            .catch((err: any) => res.status(Errors.ERROR_CREATING_DATA.status).json(Errors.ERROR_CREATING_DATA))
    }

    // Update Methods
    update = async (req: Request, res: Response, id: ObjectId, fields: Object, validation: boolean) => {

        if (!id) { res.status(Errors.NO_ID_RECEIVED.status).json(Errors.NO_ID_RECEIVED); return }
        if (validation) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

        const existing = await new this.model.findById(id)

        if (!existing) {
            res.status(Errors.NO_DATA_FOUND.status).json(Errors.NO_DATA_FOUND)
            return
        }

        await new this.model.findByIdAndUpdate(id, fields)
            .then(() => res.status(Success.DATA_UPDATED.status).json(Success.DATA_UPDATED))
            .catch(() => res.status(Errors.ERROR_UPDATING_DATA.status).json(Errors.ERROR_UPDATING_DATA))
    }


    deleteById = async (req: Request, res: Response, id: ObjectId) => {
        if (!id) { res.status(Errors.NO_ID_RECEIVED.status).json(Errors.NO_ID_RECEIVED); return }

        await new this.model.findByIdAndDelete(id)
            .then(() => res.status(Success.DATA_DELETED.status).json(Success.DATA_DELETED))
            .catch(() => res.status(Errors.ERROR_DELETING_DATA.status).json(Errors.ERROR_DELETING_DATA))

    }
}