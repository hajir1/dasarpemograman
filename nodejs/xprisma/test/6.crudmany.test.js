import { prismaClient } from "../src/prisma";

describe("crud many", () => {
  it("should be create", async () => {
    await prismaClient.customers.createMany({
      data: [
        {
          id: 1,
          nama: "hajir",
          email: "jonoundo@gmail.com",
          phone: "0923487",
        },
        {
          id: 2,
          nama: "hajir",
          email: "hajir@gmail.com",
          phone: "09234817",
        },
      ],
    });
  });
  it("shouldbe update",async()=>{
    await prismaClient.pelanggan.updateMany({
        data:{
            LastName:"hajir"
        },
        where:{
            FirstName:"usam"
        }
    })
  })
});
