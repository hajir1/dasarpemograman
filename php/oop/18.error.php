<?php
require_once "helper/Logins.php";
require_once "data/LoginRequest.php";
use Helper\Logins;


$login = new Logins();
$login->username = "usammuhajir";
$login->password= "hajir";
validateLoginRequest($login);
echo "ts";