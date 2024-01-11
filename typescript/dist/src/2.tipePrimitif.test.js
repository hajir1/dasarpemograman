import { customertype } from "./enum";
describe("data type", function () {
    it("should type data", function () {
        const nama = "Otong Surotong";
        const angka = 1000;
        const boolean = true;
        console.log(nama);
        console.log(angka);
        console.log(boolean);
    });
    it("should type array", function () {
        const huruf = ["Usam", "Otong", "Ucup"];
        const angka = [1, 2, 3];
        const readOnly = ["hajir", "sats"]; //data tidak bisa diubah
        console.log(huruf);
        console.log(angka);
    });
    it("should type tuple", function () {
        const tuple = ["hajir", "Otong", 2];
        console.log(tuple);
    });
    it("should type any", function () {
        const dataAny = {
            id: 1,
            nama: "Otong",
            address: "Malang",
        };
        dataAny.age = 11;
        console.log(dataAny);
    });
    it("should type union", function () {
        let unionType = "Ucup";
        console.log(unionType);
        unionType = 12;
        console.log(unionType);
        unionType = true;
        console.log(unionType);
        function typeUnion(value) {
            if (typeof value === "string") {
                console.log(value.toUpperCase());
            }
            else if (typeof value === "number") {
                console.log(value + 3);
            }
            else {
                console.log(!value);
            }
        }
    });
    it("should type alias", function () {
        const category = {
            id: 1,
            nama: "Usammuhajir",
        };
        const product = {
            id: 1,
            nama: "OtongSurotong",
            address: "Malang",
            category: category,
        };
        console.log(category);
        console.log(product);
    });
    it("sould type Object", function () {
        const data = {
            id: "1",
            nama: "Otong",
            hobbies: [],
        };
        console.log(data);
    });
    it("should type enum", function () {
        const typeEnum = {
            id: 1,
            name: "Ucup",
            customer: customertype.GOLD,
        };
        console.log(typeEnum);
    });
    it("should type null", function () {
        function typeNull(value) {
            if (value) {
                console.log(`hello ${value}`);
            }
            else {
                console.log("hello");
            }
        }
        typeNull("hajir");
        typeNull(null);
    });
});
