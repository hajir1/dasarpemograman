import { prismaClient } from "../src/prisma";

describe("transaksi", () => {
  it("should be transacsion", async () => {
    const [hajir, usam] = await prismaClient.$transaction([
       prismaClient.customers.create({
        data: {
          id: 12,
          nama: "hajir",
          email: "ef",
          phone: "asd",
        },
      }),
      prismaClient.customers.create({
        data: {
          id: 20,
          nama: "hajir",
          email: "test",
          phone: "tsat",
        },
      }),
    ]);
    expect(hajir.id).toBe(12);
    expect(usam.id).toBe(20);
  });
  it("should be free transaction", async () => {
    const [hajirs,otong] =await prismaClient.$transaction(async (prisma) => {
      const hajirs = await prisma.customers.create({
        data: {
          id: 13,
          nama: "hajir",
          email: "efe",
          phone: "asde",
        },
      });
      const otong = await prisma.customers.create({
        data:{
            id:14,
            nama:"hajir",
            email:"e",
            phone:"a"
           }
      })
      return[hajirs,otong]
    });
    expect(hajirs.id).toBe(13)
    expect(otong.id).toBe(14)
  });
});
