<?php

function getConnections():PDO{
    try {
        $connection = new PDO("mysql:host=localhost:3306;dbname=belajar_php","root","");
        return $connection;
    } catch (PDOException $error) {
        echo "gagal terkoneksi\t". $error->getMessage() . PHP_EOL;
    }
}