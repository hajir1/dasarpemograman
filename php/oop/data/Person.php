<?php

class Person {
    const NAMALENGKAP = "usammuhajir";
    var string $name;
    var string $city = "Kab Malang";
    var ?int $age;
    public function __construct(public ?string $names , public ?string $country){

    }
    function sayHello(?string $name){
        if(is_null($name)){
            echo "hello my name is $this->name" .PHP_EOL;
        }else{
            echo "hello $name my name is $this->name" .PHP_EOL;
            
        }
    }
    function info(){
        echo "nama lengkap saya " . self::NAMALENGKAP. PHP_EOL; 
    }
}