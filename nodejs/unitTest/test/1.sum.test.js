import Sum, { sumAll } from "../src/1.sum";

test("sum(1,3) must be 4", () => {
  const result = Sum(1, 3);
  expect(result).toBe(4);
});
test("sum(1,3) must be 4", () => {
  const result = Sum(1, 3);
  expect(result).not.toBe(20);
});
it("sum All numbers",()=>{
  expect(sumAll([10,10,10])).toBe(30)
})
