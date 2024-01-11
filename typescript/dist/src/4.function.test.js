"use strict";
describe("should function", function () {
    it("should return function", function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("hajir")).toBe("Hello hajir");
        // tanpa return
        function printHello(name) {
            console.log(`hello ${name}`);
        }
        printHello("otong");
    });
    it("should function parameter", function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello("hajir")).toBe("Hello hajir");
        expect(sayHello()).toBe("Hello Guest");
        function sum(...angka) {
            let number = 0;
            for (const num of angka) {
                number += num;
            }
            return number;
        }
        expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
    });
});
