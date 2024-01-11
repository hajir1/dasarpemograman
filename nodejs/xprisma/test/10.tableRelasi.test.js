import { prismaClient } from "../src/prisma";

describe("Tabel relasi", () => {
    it("should be table relasi one to one", async () => {
      const data = await prismaClient.wallet.create({
        data: {
          id: 1,
          balance: 1000000,
          customer_id: 1,
        },
        include: {
          customers: true,
        },
      });
      console.log(data);
    });
    it("should be one to one relasi with relations", async () => {
      const data1 =  await prismaClient.customers.create({
        data: {
          id: 10,
          nama: "hajirsaja",
          email: "hajir@hasd.com",
          phone: "asdasd",
          wallet: {
            create: {
              id:10,
              balance: 10000,
            },
          },
        },
        include: {
          wallet: true,
        },
      });
      console.log(data1)
    });
  it("should be find relasi",async()=>{
    const data3 = await prismaClient.customers.findMany({
        where:{
            wallet:{
                is:null
            }
        },
        include:{
            wallet:true
        }
    })
    console.log(data3)
  });
});
