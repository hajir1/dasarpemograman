<?php

namespace Data;
abstract class Location{
    var ?string $name ;
    abstract function sayHello():void;
};
// class abstract tidak bisa di buat object


class City extends Location {
    public function sayHello(): void {
        echo "hello";
    }
}


interface Car {
    function Name():string;
    function getTire():int;
}

class DetailCars implements Car{
    function Name():string{
        return "ini mobil";
    }
    function getTire():int{
        return 5;
    }
}