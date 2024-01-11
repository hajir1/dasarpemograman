import { prismaClient } from "../src/prisma";

describe("many To Many relasi", () => {
  it("should be many to many", async () => {
    const like = await prismaClient.likes.create({
      data: {
        product_id: 1,
        customer_id: 1,
      },
      include:{
        customers :true,
        products:true
      }
    });
    console.log(like)
  });
});
