<?php

$value = "A";

$result = match ($value) {
     "A","B","C" =>  "anda lulus",
      "D" =>  "anda tidak lulus",
      default =>"APA ITU"
};

echo $result .PHP_EOL;