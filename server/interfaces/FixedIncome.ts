interface Discount { }

export default interface FixedIncome {
    name: string,
    value: number,
    day: number,
    interval: number,
    discounts?: Array<Discount>
}