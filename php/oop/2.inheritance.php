<?php
require_once "./data/2.php";

$president = new Data1\President();
$president->name = "usammuhajir";
$president->sayHello("hajir");

$employee = new Data2\Employee();
$employee->name = "otong";
$employee->sayHello("surotong");

echo \Helper\NAMA; 