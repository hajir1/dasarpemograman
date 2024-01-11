import { sayHelloAsync } from "../src/2.async"

test("say hello async",async()=>{
    const result = await sayHelloAsync("Hajir")
    expect(result).toBe("hello Hajir")
})

test("say hello matchers",async()=>{
    await expect(sayHelloAsync("Hajir")).resolves.toBe("hello Hajir")
    await expect(sayHelloAsync()).rejects.toBe("nama tidak ada")
})