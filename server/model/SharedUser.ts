import mongoose from "mongoose"

import ISharedUser from "../interfaces/SharedUser"

const schema = new mongoose.Schema<ISharedUser>({
    user_id: { type: String, required: true },
    access_level: { type: Number, default: 1 }
})


const model = mongoose.model<ISharedUser>('shared_user', schema)

export { schema, model }