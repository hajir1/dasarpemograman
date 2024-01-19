<?php


$array = [
    "firtsName"=>"Usam",
    "lastName"=>"Muhajir"
];

$object = (object) $array;

echo $object->firtsName;
echo $object->lastName .PHP_EOL; 

$arrayLagi = (array) $object;

echo $arrayLagi["firtsName"];
echo $arrayLagi["lastName"];