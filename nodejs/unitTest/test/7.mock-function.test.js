import { calculate } from "../src/1.sum"

it("mock calculate",()=>{
    const callback = jest.fn()
    calculate([10,10,10],callback)
    calculate([10,10,10,10,10],callback)


    // panjang calculate
    expect(callback.mock.calls.length).toBe(2)
    // calculate meng calback sebuah array
    expect(callback.mock.calls[0][0]).toBe(30)
    expect(callback.mock.calls[1][0]).toBe(50)
})