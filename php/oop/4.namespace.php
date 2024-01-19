<?php

require_once "data/Conflict.php";
require_once "data/Helper.php";

use Data\one\Conflict as Conflict1;
use Data\two\Conflict as Conflict2;
use const Helper\NAMA;
use function Helper\info;



$conflict1 = new Conflict1();
$conflict2 = new Conflict2();

echo NAMA . PHP_EOL;
info();