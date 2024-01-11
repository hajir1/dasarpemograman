<?php
$say = "hello\t" . htmlspecialchars($_GET["firstname"]) ."" . htmlspecialchars($_GET["lastname"]) .PHP_EOL;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?= $say?></h1>
</body>
</html>