<?php

require_once __DIR__ . "/koneksi.php";

$connection = getConnections();
$sql = <<<SQL
    Insert into admins(nama,passwords)
    values ("hajir","hajir");
SQL;
$connection->exec($sql);
$connection = null;