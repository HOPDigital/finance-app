import { Model, ObjectId } from "mongoose"

import { Request, Response } from "express"

import { Errors } from "../services/AppErrors"
import { Success } from "../services/AppSuccess"
import handle, { ERRORS, SUCCESS } from "../services/Messages"

interface INest {
    parent_model: Model<any>,
    validation?: boolean,
    parent_field: string,
}

interface INestStrict extends INest {
    parent_id: string
}

export class Controller {

    model: Model<any>

    constructor(model: Model<any>) {
        this.model = model
    }


    // Get Methods
    getAll = async (req: Request, res: Response) => {

        await this.model.find({})
            .then((data: Object) => res?.status(Success.DATA_GATHERED.status).json({ ...Success.DATA_GATHERED, data }))
            .catch(() => res?.status(Errors.ERROR_RETRIEVING_DATA.status).json(Errors.ERROR_RETRIEVING_DATA))

    }

    getByFilter = async (req: Request, res: Response, filter: any) => {

        if (!filter) return handle(ERRORS.MISSING_FIELDS, res)

        const result = await this.model.find(filter)

        if (!result) return handle(ERRORS.NO_DATA_FOUND, res)

        return handle(SUCCESS.DATA_GATHERED, res)
    }

    getNested = async (req: Request, res: Response, fields: INestStrict) => {
        const { parent_field, parent_model, validation, parent_id } = fields

        if (!(parent_field && parent_model && parent_id)) return handle(ERRORS.MISSING_FIELDS, res)

        if (validation) return handle(ERRORS.ERROR_RETRIEVING_DATA, res)

        const parent = (await parent_model.find({ _id: parent_id }))[0]

        if (!parent) return handle(ERRORS.NO_DATA_FOUND, res)

        const nest = parent?.[parent_field]

        if (!nest) return handle(ERRORS.NO_DATA_FOUND, res)

        handle(SUCCESS.DATA_GATHERED, res, nest)
    }

    // Create Methods
    create = async (req: Request, res: Response, fields: Object, validation: boolean) => {

        if (validation) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS) }

        await this.model.create(fields)
            .then((data: any) => res.status(Success.DATA_CREATED.status).json(data.toObject()))
            .catch((err: any) => res.status(Errors.ERROR_CREATING_DATA.status).json(Errors.ERROR_CREATING_DATA))
    }

    createNested = async (req: Request, res: Response, parameters: INest) => {
        const { validation, parent_model } = parameters
        const { parent_id, fields, parent_field } = req?.body

        if (!parent_id) return handle(ERRORS.NO_ID_RECEIVED, res)

        if (validation) return handle(ERRORS.ERROR_CREATING_DATA, res)

        try {
            const parent = await parent_model.findById(parent_id)

            if (!parent) return handle(ERRORS.NO_DATA_FOUND, res)

            const nest = new this.model(fields)

            parent?.[parent_field]?.push(nest)

            await parent?.save()
                .then(() => handle(SUCCESS.DATA_CREATED, res, nest.toObject))
        }
        catch (error) {
            return handle(ERRORS.INCORRECT_FIELDS, res)
        }
    }

    // Update Methods
    update = async (req: Request, res: Response, id: ObjectId, fields: Object, validation: boolean) => {

        if (!id) { res.status(Errors.NO_ID_RECEIVED.status).json(Errors.NO_ID_RECEIVED); return }
        if (validation) { res?.status(Errors.MISSING_FIELDS.status).json(Errors.MISSING_FIELDS); return }

        const existing = await this.model.findById(id)

        if (!existing) {
            res.status(Errors.NO_DATA_FOUND.status).json(Errors.NO_DATA_FOUND)
            return
        }

        await this.model.findByIdAndUpdate(id, fields)
            .then(() => res.status(Success.DATA_UPDATED.status).json(Success.DATA_UPDATED))
            .catch(() => res.status(Errors.ERROR_UPDATING_DATA.status).json(Errors.ERROR_UPDATING_DATA))
    }


    deleteById = async (req: Request, res: Response, id: ObjectId) => {
        if (!id) { res.status(Errors.NO_ID_RECEIVED.status).json(Errors.NO_ID_RECEIVED); return }

        await this.model.findByIdAndDelete(id)
            .then(() => res.status(Success.DATA_DELETED.status).json(Success.DATA_DELETED))
            .catch(() => res.status(Errors.ERROR_DELETING_DATA.status).json(Errors.ERROR_DELETING_DATA))

    }
}