interface Discount { }

export default interface IFixedIncome {
    name: string,
    value: number,
    day: number,
    interval: number,
    discounts?: Array<Discount>
}