<?php

namespace Data1{
    class President {
        var ? string $name;
        function sayHello(? string $name):void{
            echo "hai $name , my name is $this->name";
        }
    }
    
}
namespace Data2{

    class Employee extends \Data1\President{
    
    }
};

namespace Helper{

    const NAMA = "Usammuhajir";
};