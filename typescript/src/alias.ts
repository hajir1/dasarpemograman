export type ID = number | string

export type Category ={
    id :ID,
    nama :string,
    deskripsi?: string
}
export type Product ={
    id :ID,
    nama:string,
    address : string
    category : Category
}