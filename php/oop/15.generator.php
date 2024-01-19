<?php

function getGanjil(int $max):Iterator{
    for($i = 0 ; $i<=$max; $i++){
        if($i % 2 == 1){
            yield $i;
        }
    }
}


foreach(getGanjil(10) as $value){
    echo "ganjil : $value";
}