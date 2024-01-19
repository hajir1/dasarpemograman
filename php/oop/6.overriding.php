<?php


require_once "data/Manager.php";
require_once "data/Foo.php";

use Data\{Foo,Bar};

$manager = new Manager();
$manager->name = "asep";
$manager->sayHello("hajir");


$emp = new Employee();
$emp->name = "asep";
$emp->sayHello("ucup");



$foo = new Foo();
echo $foo->getCorner();

$bar = new Bar();
echo $bar->getCorner();
echo $bar->getParentCorner();