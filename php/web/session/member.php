<?php

session_start();
if($_SESSION['login'] != true){
    header("location: login.php");
}

$name = "hello" . $_SESSION["username"] .PHP_EOL;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    <h1><?=$name?></h1>
    <a href="logout.php">logout</a>
</body>
</html>