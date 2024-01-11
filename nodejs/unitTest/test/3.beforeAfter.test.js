import Sum from "../src/1.sum"

beforeAll(()=>{
    console.log("before all")
})
afterAll(()=>{
    console.log("after all")
})
beforeEach(()=>{
    console.log("before test")
})
afterEach(()=>{
    console.log("after test")
})

test("should summary",()=>{
    expect(Sum(10,10)).toBe(20)
    console.log("first")
})
test("should summary",()=>{
    expect(Sum(10,10)).toBe(20)
    console.log("second")
})