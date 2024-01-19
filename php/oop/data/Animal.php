<?php


namespace Data;

abstract class Animal {
    public string $name;
    abstract public function run(): void;

}
class Cat extends Animal { 
    public function run(): void {
        echo "$this->name is running";
    }
}
class Dog extends Animal { 
    public function run(): void {
        echo "$this->name is running";
    }
}