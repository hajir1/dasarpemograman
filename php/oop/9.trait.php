<?php

require_once "data/SayGoodBye.php";

use Data\Saying\{Saying};


$say = new Saying();
$say->name ="hajir";
echo "{$say->hello('hajir')}" . PHP_EOL;
echo "{$say->goodBye('hajir')}" . PHP_EOL;