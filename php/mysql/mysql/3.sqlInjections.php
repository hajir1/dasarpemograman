<?php

require_once __DIR__ . "/koneksi.php";

$connections = getConnections();
$nama = "hajir";
$passwords= "hajir";
$sql = "select * from admins where nama = :nama AND passwords = :passwords";
$statement = $connections->prepare($sql);
$statement->bindParam("nama",$nama);
$statement->bindParam("passwords",$passwords);
$statement->execute();


if($row = $statement->fetch()){
    echo "sukses login" . $row["nama"] . PHP_EOL;
}else{
    echo "gagal";
}
$connections = null;
