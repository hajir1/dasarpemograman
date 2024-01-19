<?php

class Manager {
    var string $name;
    function sayHello(string $name ):void{
        echo "hello $this->name i Manager $name" . PHP_EOL;
    } 
}

class Employee extends Manager{
    function sayHello(string $name):void{
        echo "hello $this->name i Emplooye $name" . PHP_EOL;
    }
}