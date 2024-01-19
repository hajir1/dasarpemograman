<?php

interface sayHello{
    public function sayHello():void;
}


$hello = new class("hajir") implements sayHello{
    public function __construct(public ?string $name){
        
    }
    public function sayHello():void{
        echo "hello $this->name";
    }
};

$hello->sayHello();