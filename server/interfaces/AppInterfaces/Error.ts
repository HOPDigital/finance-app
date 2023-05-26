export default interface IError {
    success: boolean,
    message?: string,
    status: number,
    auth?: boolean
}