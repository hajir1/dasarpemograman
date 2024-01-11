import {PrismaClient} from "@prisma/client"
it("should be connections",async()=>{
    const prisma = new PrismaClient()
    await prisma.$connect()
    await prisma.$disconnect()
})