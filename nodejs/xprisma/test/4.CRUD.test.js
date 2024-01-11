import { prismaClient } from "../src/prisma"
import testSample from "./2.function.test"

// it("should be create",async ()=>{
//     const customers =await prismaClient.customers.create({
//         data:{
//             id:7,
//             nama:"usammuhajir",
//             email:"sas",
//             phone:"as"
//         }
//     })
//     testSample`insert into customers(nama,email,phone) values (customers.nama,customers.email,customers.phone)`
// })
it("should be update",async ()=>{
    const customers = await prismaClient.customers.update({
        data:{
            phone:"08412352138"
        },
        where:{
            id:4
        }
    })
    expect(customers.phone).toBe("08412352138")
})

it("should be read",async ()=>{
    const customers = await prismaClient.customers.findUnique({
        where:{
            email:"ss"
        }
    })
    expect(customers.phone).toBe("08412352138")
})
it("should be delete",async ()=>{
    const customers = await prismaClient.customers.delete({
        where:{
            email:"ss"
        }
    })
    expect(customers.phone).toBe("08412352138")
})