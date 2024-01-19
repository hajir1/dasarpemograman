<?php

namespace Data;
// abstract class tidak bisa dibuat object tetapi bisa diturunkan
abstract class Location
{
    public string $name;
    abstract function run(string $name): void;
}

class Country extends Location
{
    function run(string $name):void{
        echo "hello $this->name my name is $name";
    }
}

// $location = new Location(); error