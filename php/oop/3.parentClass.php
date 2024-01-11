<?php
require_once "./Data/3.abstract.php";
use Data\{Location,City,Car,DetailCars};

$city = new City();
$city->name ="hajir";
$city->sayHello();
var_dump($city);

$car = new DetailCars();
var_dump($car->Name());
var_dump($car->getTire());