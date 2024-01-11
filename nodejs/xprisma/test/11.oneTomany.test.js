import { prismaClient } from "../src/prisma";

describe("one to many relasi", () => {
    it("should be one to many relationship", async () => {
      const data = await prismaClient.komentar.create({
        data: {
          customer_id: 1,
          title: "say hajir",
          deskripsi: "bagus",
        },
        include: {
          customers: true,
        },
      });
      console.log(data);
    });
    it("sould be one to many with relasi", async () => {
      const data1 = await prismaClient.customers.create({
        data: {
          id: 5,
          nama: "otong",
          email: "oton@aksd.com",
          phone: "eil-9",
          komentar: {
            createMany: {
              data: [
                {
                  title: "hahaha otong",
                  deskripsi: "yaya",
                },
                {
                  title: "otong",
                  deskripsi: "yaya",
                },
                {
                  title: "hahaha",
                  deskripsi: "yaya",
                },
              ],
            },
          },
        },
        include:{
          komentar:true
        }
      });
      console.log(data1);
    });
  it("should be data null in relasi", async () => {
    const data2 = await prismaClient.customers.findMany({
      where: {
        wallet: {
          is: null,
        },
      },
      include: {
        komentar: true,
      },
    });
    console.log(data2);
  });
});
