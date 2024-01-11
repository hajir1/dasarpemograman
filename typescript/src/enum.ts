export enum customertype {
    GOLD = "GOLD",
    PLATINUM ="PLATINUM",
    SILVER ="SILVER"
}

export type customer= {
    id :number,
    name :string,
    customer :customertype
}