export interface employe {
    id :number |string,
    name :string
}

export interface manager extends employe{
    address : string
}