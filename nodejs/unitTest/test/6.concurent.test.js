import { sayHello } from "../src/0.sayHello"

it.concurrent("concurrent",async ()=>{
    await expect(sayHello("hajir")).toBe("hello hajir")
})
it.concurrent("concurrent",async ()=>{
    await expect(sayHello("hajir")).toBe("hello hajir")
})
it.concurrent("concurrent",async ()=>{
    await expect(sayHello("hajir")).toBe("hello hajir")
})

// harus error
it.failing("concurrent", ()=>{
    sayHello(null)
})

