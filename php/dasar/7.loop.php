<?php

$names = ["Usam","muhajir"];

foreach ($names as $name) {
    echo  "hai $name\t";
}
$person =[
    "firstName"=>"usam",
    "lastName"=>"muhajir"
];

foreach ($person as $key => $value) {
    echo "$key" ."\t" ."$value";
};