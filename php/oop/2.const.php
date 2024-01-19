<?php

require_once "data/Person.php";

echo Person::NAMALENGKAP . PHP_EOL;

$person = new Person("hajir","Indonesia");
$person->info();
var_dump($person);