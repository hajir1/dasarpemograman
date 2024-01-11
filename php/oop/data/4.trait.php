<?php

namespace Data;
trait SayHello {
    public function sayHello(?string $name): string {
        return $name !== null ? "Hallo $name" : "Hallo";
    }
}


class Person {
    use sayHello;
}

trait A {
    function doA ():string{
        return "a";
    }
    function doB ():string{
        return "b";
    }
}
trait B {
    function doA ():string{
        return "A";
    }
    function doB ():string{
        return "B";
    }
}

class Sample{
    use A, B{
        A::doA insteadOf A;

    }
}