<?php

// interface bisa mewarisi interface lainnya , dan class bisa diwarisi banyak interface
interface Car
{
    function getcar():void;
}

interface Brand extends Car
{
    function getBrand():void;
}

interface Solar 
{
    function buySolar(int $solar):void;
}


class DetailCars implements Brand , Solar
{
    public function getcar():void {
        
    }
    public function getBrand():void {
        
    }
    public function buySolar(int $solar):void{

    }
}