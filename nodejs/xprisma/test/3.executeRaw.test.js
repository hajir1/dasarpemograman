import { prismaClient } from "../src/prisma"

it("should be execute row",async()=>{
    // const ids ="3"
    // const name = "hajir"
    // const prisma =await prismaClient.$executeRaw `insert into sample(id,nama) values (${ids},${name})`

    // query
    const samples =await prismaClient.$queryRaw `select * from sample `
    for (const sample of samples) {
        console.log(`${sample.id} ${sample.nama}`)
    }
})