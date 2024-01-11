import { prismaClient } from "../src/prisma";

describe("count", () => {
  it("should be counting", async () => {
    const prisma = await prismaClient.pelanggan.count({
      where: {
        LastName: "hajir",
      },
    });
    expect(prisma).toBe(2)
  });
  it("should be grouping",async()=>{
    const group = await prismaClient.products.groupBy({
      by:["category"],
      _max:{
        price:true,
        stock:true
      },
      _min:{
        price:true,
        stock:true
      },
      _avg:{
        price:true,

      },
      having:{
        price:{
          _avg:{
            gt:2000
          }
        }
      }
    })
    console.log(group)
  })
});
