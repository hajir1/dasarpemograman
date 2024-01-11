<?php
namespace Data\Data;


class People{
    public function __construct(public string $name) {
    }
    public function sayHello(?string $name) :string{
        return "hello $name my name is $this->name";
    }
}
?>