import Card from "./CardInterface";
import FixedBill from "./FixedBill";
import FixedIncome from "./FixedIncome";
import Transaction from "./TransactionInterface";

import { Types } from "mongoose";

export default interface IBox {
    _id: Types.ObjectId,
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