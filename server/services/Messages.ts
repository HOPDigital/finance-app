import IMessage from "../interfaces/AppInterfaces/Messages";

import { Errors } from "./AppErrors";
import { Success } from "./AppSuccess";

import { Response } from "express";

export default function handle(alias: IMessage, res: Response, data?: any) {
    if (alias) return res.status(alias.status).json({ ...alias, data })
}

export { Errors as ERRORS, Success as SUCCESS }