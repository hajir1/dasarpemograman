<?php
require_once "data/Manager.php";

$manager = new Manager();
$manager->name ="usam";
$manager->sayHello("muhajir");

$emp = new Employee();
$emp->name ="ek";
$emp->sayHello("kh");