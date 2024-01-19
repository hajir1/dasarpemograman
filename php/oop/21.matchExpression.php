<?php


$nilai = "d";

$result = match ($nilai){
    "a","b","c"=>"anda lulus",
    "d"=>"anda tidak lulus",
    default => "nilai kosong"
};


echo $result . PHP_EOL;

$nilai = 1;
$result = match (true){
    $nilai > 80 => "a",
    $nilai > 70 => "b",
    $nilai > 60 => "c",
    default => "ss"
};
echo $result;