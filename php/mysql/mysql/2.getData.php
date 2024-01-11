<?php

require_once __DIR__ . "/koneksi.php";

$connections = getConnections();
$sql = <<<SQL
select * from customers
SQL;
$result = $connections->query($sql);
foreach ($result as  $value) {
    var_dump($value);
};
$connections = null;
