describe("should function", function () {
  it("should return function", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("hajir")).toBe("Hello hajir");
    // tanpa return
    function printHello(name: string): void {
      console.log(`hello ${name}`);
    }
    printHello("otong");
  });
  it("should function parameter", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello("hajir")).toBe("Hello hajir");
    expect(sayHello()).toBe("Hello Guest");

    function sum(...angka: number[]): number {
      let number = 0;
      for (const num of angka) {
        number += num;
      }
      return number;
    }
    expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
  });
  it("should function as params", function () {
    function sayHello(
      name: string,
      filter: (filter: string) => string
    ): string {
      return `${filter(name)}`;
    }

    function toFilter(filter: string): string {
      return filter.toUpperCase();
    }
    expect(sayHello("hajir", toFilter)).toBe("HAJIR");
    expect(sayHello("hajir", (filter: string): string => filter.toUpperCase())).toBe("HAJIR")
  });
});
