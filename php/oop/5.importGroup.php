<?php

require_once "data/Conflict.php";
require_once "data/Product.php";
use Data\one\{Conflict , Dummy , Sample};
use Data\field\{Product ,Buyer};
$conflict = new Conflict();
$dummy = new Dummy();
$sample = new Sample();


$product = new Product("basko",20000);
$product->getName();
echo "nama product : " . $product->getName() . PHP_EOL;
$product->getPrice();
echo "harga product : " . $product->getPrice() . PHP_EOL;

$buy = new Buyer("hajir",200000);
$buy->info();