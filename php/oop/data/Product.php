<?php

namespace Data\field{
    class Product{
        protected string $name;
        protected int $price;

        public function __construct(string $name, int $price){
            $this->name = $name;
            $this->price = $price;
        }
        public function getName():string{
            return $this->name;
        }
        public function getPrice():int{
            return $this->price;
        }
}
class Buyer extends Product{
    function info(){
        echo $this->name .  $this->price;
    }
}
}

// ketika emnggunakan protected turunan dari si class mendapatkan akses property