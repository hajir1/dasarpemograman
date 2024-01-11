import { Category, Product } from "./alias";
import { customer, customertype } from "./enum";

describe("data type", function () {
  it("should type data", function () {
    const nama: string = "Otong Surotong";
    const angka: Number = 1000;
    const boolean: boolean = true;

    console.log(nama);
    console.log(angka);
    console.log(boolean);
  });
  it("should type array", function () {
    const huruf: string[] = ["Usam", "Otong", "Ucup"];
    const angka: Number[] = [1, 2, 3];
    const readOnly: ReadonlyArray<string> = ["hajir", "sats"]; //data tidak bisa diubah
    console.log(huruf);
    console.log(angka);
  });
  it("should type tuple", function () {
    const tuple: readonly [String, String, Number] = ["hajir", "Otong", 2];
    console.log(tuple);
  });
  it("should type any", function () {
    const dataAny: any = {
      id: 1,
      nama: "Otong",
      address: "Malang",
    };
    dataAny.age = 11;
    console.log(dataAny);
  });
  it("should type union", function () {
    let unionType: string | number | boolean = "Ucup";
    console.log(unionType);

    unionType = 12;
    console.log(unionType);
    unionType = true;
    console.log(unionType);
    function typeUnion(value: string | number | boolean) {
      if (typeof value === "string") {
        console.log(value.toUpperCase());
      } else if (typeof value === "number") {
        console.log(value + 3);
      } else {
        console.log(!value);
      }
    }
  });
  it("should type alias", function () {
    const category: Category = {
      id: 1,
      nama: "Usammuhajir",
    };
    const product: Product = {
      id: 1,
      nama: "OtongSurotong",
      address: "Malang",
      category: category,
    };

    console.log(category);
    console.log(product);
  });
  it("sould type Object", function () {
    const data: { id: string; nama: string; hobbies?: string[] } = {
      id: "1",
      nama: "Otong",
      hobbies: [],
    };
    console.log(data);
  });
  it("should type enum", function () {
    const typeEnum: customer = {
      id: 1,
      name: "Ucup",
      customer: customertype.GOLD,
    };
    console.log(typeEnum);
  });
  it("should type null", function () {
    function typeNull(value:string | null) {
      if (value) {
        console.log(`hello ${value}`);
      } else {
        console.log("hello");
      }
    }
    typeNull("hajir");
    typeNull(null)
  });
});
