<?php


interface HasName{
    public function getName() : string;
}
interface HasBrand{
    public function getBrand() : string;
}

class Car implements HasName, HasBrand{
    public function __construct(public string $brand , public string $name){}
    public function getBrand() :string{
        return $this->brand;
    }
    public function getName() : string{
        return $this->name;
    }
}
function getNameInBrand(HasBrand & HasName $value){
    echo $value->getBrand() . PHP_EOL . $value->getName();
}

getNameInBrand(new Car("Toyota","avanza"));