import { prismaClient } from "../src/prisma";

describe("sorting", () => {
  it("should be sorting and paging", async () => {
    const prisma = await prismaClient.pelanggan.findMany({
      skip: 0,
      take: 20,
      orderBy: [
        {
          FirstName: "desc",
        },
        {
          LastName: "asc",
        },
      ],
    });
    console.log(prisma);
  });
});
