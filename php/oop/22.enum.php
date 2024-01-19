<?php

interface Saying{
    public function sayHello(string $name):string;
}
enum Gender{
    case Male;
    case Female;
    function sayHello(string $name):string{
        return match (true){
            Gender::Male => "Tuan $name",
            Gender::Female => "Nyonya $name",
            default => $name
        };
    }
};


class Customer{
    public function __construct(public string $name , 
                                public Gender $gender){}
}

function sayHello(Customer $customer) :string{
    if($customer->gender == Gender::Male){
        return "hello Mr " . $customer->name;
    }else if($customer->gender == Gender::Female){
        return "hello mrs " . $customer->name;
    }else{
        return "siaapa luu";
    }
}

$result = sayHello(new Customer("hajir",Gender::Female));
echo $result;

Gender::cases();

var_dump(Gender::Male->sayHello("Hajir"));