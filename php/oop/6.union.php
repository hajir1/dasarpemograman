<?php
class Example{
    public int | string $data;
}

function sampleFunction(string | int $data) : void {
    if(is_string($data)){
        echo "string";
    }else if(is_int($data)){
        echo "int";

    }
}

sampleFunction(1);