<?php


require_once "data/Transaction.php";

use Data\Transaction;


$transaksi = new Transaction();
$transaksi->setBuyer(true);
$transaksi->setPrice(100000);

echo  "Beli : {$transaksi->isBuyer()}" . PHP_EOL;
echo  "Harga : {$transaksi->getPrice()}";