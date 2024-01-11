<?php
$nama = "hajir";
$hi = $nama === "hajir"?"hai hajir":"hai bukan hajir";

$data =[
    "action"=>"create"
];
$action = $data["action"]??"not create";
echo $action ."\t";
echo $hi;