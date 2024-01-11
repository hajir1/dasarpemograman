<?php
require_once "./Data/4.trait.php";
use Data\{Person,Sample};

$person = new Person();
var_dump($person->sayHello("hajir"));
$sample = new Sample();
echo $sample->doA(); // Output: "a"
echo $sample->doB(); // 