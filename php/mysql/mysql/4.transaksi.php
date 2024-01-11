<?php

require_once __DIR__ . "/koneksi.php";

$connections = getConnections();
$connections->BeginTransaction();
$connections->exec("Insert into customers(nama,email) values ('hajir','hajir')");
$connections->exec("Insert into customers(nama,email) values ('hajir','hajir')");
$connections->exec("Insert into customers(nama,email) values ('hajir','hajir')");
$connections->exec("Insert into customers(nama,email) values ('hajir','hajir')");
$connections->commit();
$connections = null;
