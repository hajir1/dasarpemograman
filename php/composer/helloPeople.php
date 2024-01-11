<?php
require_once(__DIR__ . '/vendor/autoload.php');

use Data\Data\People;

$people = new People("hajir");
$result = $people->sayHello("usamuhajir");
var_dump($result);

?>