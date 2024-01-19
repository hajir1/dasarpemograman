<?php

class Cloning
{
    public string $id;
    public string $name;
    public int $absen;
    public function setName(?string $name):string{
        return $this->name;
    }
    public function __clone(){
        unset($this->id);
    }
}

$clone1 = new Cloning();
$clone1->id = "1";
$clone1->name = "Usammuhajir";
$clone1->absen = 100;
$clone1->setName("hajir");
var_dump($clone1);

$clone2 = clone $clone1;

var_dump($clone2);