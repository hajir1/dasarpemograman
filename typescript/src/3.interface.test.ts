import { employe, manager } from "./extends";

describe("should interface", function () {
  it("should interface function", function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }
    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };
    expect(add(2, 2)).toBe(4);
  });
  it("should interface array", function () {
    interface arrayIndexable {
      [index: number]: string;
    }
    const dictionary: arrayIndexable = ["Usam", "Muhajir", "Otong"];
    console.log(dictionary[0]);
    console.log(dictionary[1]);
    console.log(dictionary[2]);
  });
  it("should interface extends", function () {
    const employee: employe = {
      id: 1,
      name: "Otong Surotong",
    };
    console.log(employee);
    const manager: manager = {
      id: 1,
      name: "Otong Surotong",
      address: "malang",
    };
    console.log(manager);
  });
  it("should interface function",function(){
    interface person {
        name:string,
        sayhello(name:string) : string
    }
    const Person : person ={
        name :"Hajir",
        sayhello : function(name : string) : string{
            return `Hello ${name} my name ${this.name}`
        }

    }
    
    console.log(Person.sayhello("Otong"))
  })
});
