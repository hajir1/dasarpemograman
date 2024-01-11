import { prismaClient } from "../src/prisma"

describe("where conditions",()=>{
    it("should be where conditions",async ()=>{
        const where = await prismaClient.products.findMany({
           where:{
            OR:[
                {nama:"a"},
                {nama:"b"}
            ]
           },
           orderBy:{
            nama:"asc"
           }
           
        })
        console.log(where)
    })
})