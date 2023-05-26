export default interface IMessage {
    success: boolean,
    auth?: boolean,
    message: string,
    status: number
}