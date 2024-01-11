import { sayHello } from "./halloWorld";

describe("hello",function(){
    it("should Hello World",function(){
        expect(sayHello("otongSurotong")).toBe("hello otongSurotong")
    })
})
