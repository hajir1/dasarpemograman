describe("should interface", function () {
    it("should interface function", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("should interface array", function () {
        const dictionary = ["Usam", "Muhajir", "Otong"];
        console.log(dictionary[0]);
        console.log(dictionary[1]);
        console.log(dictionary[2]);
    });
    it("should interface extends", function () {
        const employee = {
            id: 1,
            name: "Otong Surotong",
        };
        console.log(employee);
        const manager = {
            id: 1,
            name: "Otong Surotong",
            address: "malang",
        };
        console.log(manager);
    });
    it("should interface function", function () {
        const Person = {
            name: "Hajir",
            sayhello: function (name) {
                return `Hello ${name} my name ${this.name}`;
            }
        };
        console.log(Person.sayhello("Otong"));
    });
});
export {};
