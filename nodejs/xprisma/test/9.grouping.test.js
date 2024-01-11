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
    await prismaClient.p
  })
});
