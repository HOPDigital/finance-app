import Category from "./Category";


export default interface ITransaction {
    value: number,
    currency: string,
    type: string,
    date: Date,
    created_at: Date,
    description?: string,
    category: Category
}