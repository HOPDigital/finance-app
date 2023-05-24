import Card from "./CardInterface";
import FixedBill from "./FixedBill";
import FixedIncome from "./FixedIncome";
import Transaction from "./TransactionInterface";

export default interface IBox {
    name: string,
    description?: string,
    created_at: Date,
    target?: number,
    balance?: number,
    currency?: string,
    background_image?: string,
    box_image?: string,
    card?: Array<Card>,
    transactions?: Array<Transaction>,
    fixed_bills?: Array<FixedBill>,
    fixed_incomes?: Array<FixedIncome>
}