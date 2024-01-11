<?php

final class Person {
 const AUTHOR = "usammuhajir@gmail.com";
 var string $name;
 var ?string $address;
 var string $country ="indonesia";
 function __construct(?string $name , ?string $address){
    $this->name = $name;
    $this->address = $address;
 }
 final function sayHello(?string $name = null){
    if($name === null){
        return "hello , saya $this->name";
    }else{
        return "hello $name , saya $this->name";
    };
}

 function info(){
    return "Author :" . self::AUTHOR . "\t";
}
};