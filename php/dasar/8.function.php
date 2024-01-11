<?php

$firstName = "usam";
$lastName = "Muhajir";
$result = fn()=> "hello $firstName ,$lastName";



echo $result();

function factorialRecursive(int $value): int{
    if($value == 1){
        return 1;
    }else{
        return $value * factorialRecursive($value -1);
    };
};

var_dump(factorialRecursive(4));