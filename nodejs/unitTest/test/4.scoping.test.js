describe("nested soping", () => {
  beforeAll(() => console.log("before All outer"));
  afterAll(() => console.log("after All outer"));
  describe("first nested", () => {
    beforeAll(() => console.log("before All inner"));
    afterAll(() => console.log("after All inner"));
    test("first Test",()=>console.log("test first "))
  });
  describe("second nested", () => {
    beforeAll(() => console.log("before All inner"));
    afterAll(() => console.log("after All inner"));
    test("second test",()=>console.log("test second "))
  });
});
