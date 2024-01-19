<?php

namespace Data;

class Transaction
{
    private int $price;
    private bool $buyer;

    public function getPrice():int{
        return $this->price;
    }
    public function isBuyer():bool{
        return $this->buyer;
    }

    public function setBuyer(bool $buyer):bool{
        return $this->buyer = $buyer;
    }
    public function setPrice(int $price):int{
        return $this->price = $price;
    }
}