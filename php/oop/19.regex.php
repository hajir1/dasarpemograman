<?php

$match = [];
$match = preg_match_all("/ha|ji/i" , "Usam Muhajir", $match);
echo $match;

$result = preg_replace("/anjing|bangsat/i","***","anjing hai");
echo $result;