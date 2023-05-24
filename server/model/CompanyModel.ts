import mongoose from "mongoose"

import ICompany from "../interfaces/Company"
import { schema as SharedUser } from "./SharedUser"

const schema = new mongoose.Schema<ICompany>({
    public_id: String,
    name: { type: String, required: true },
    description: String,
    logotype: String,
    hero: String,
    shared_data: {
        is_shared: { type: Boolean, default: false },
        users: [SharedUser]
    }

})

const model = mongoose.model<ICompany>('company', schema)

export { model, schema }