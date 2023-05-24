import ISharedData from "./SharedData"


export default interface ICompany {
    public_id?: string,
    name: string,
    description?: string,
    logotype?: string,
    hero?: string,
    shared_data: {
        is_shared?: ISharedData
    }
}