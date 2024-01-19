<?php

require_once "data/person.php";

$person = new Person(null , null);
$person->name = "usamMuhajir";
$person->city = "Malang";
$person->age = null;

var_dump($person);
$person->sayHello(null) ;
echo "nama : $person->name" . PHP_EOL;
echo "kota : $person->city" . PHP_EOL;
echo "umur : $person->age" . PHP_EOL;
