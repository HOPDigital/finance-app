import ISharedUser from "./SharedUser"

export default interface ISharedData {
    is_shared: boolean,
    users?: Array<ISharedUser>
}