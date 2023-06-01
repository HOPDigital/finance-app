interface IType {
    type: string,
    default?: any
}


export default interface IResponse {
    success: IType,
    status: IType,
    message: IType
}