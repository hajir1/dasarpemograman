<?php
session_start();
// if($_SESSION["login"] = true){
//     header("location: session.php");
//     exit();
// }
$error ="";
if($_SERVER["REQUEST_METHOD"] == "POST"){
   if($_POST["username"] == "hajir" && $_POST["password"] == "hajir"){
    $_SESSION["login"] = true;
    $_SESSION["username"] = "hajir";
    header("location: member.php");
    exit();
   }
}else{
    $error ="gagal login";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="login.php" method="post">
    <label for="">username</label>
    <input type="text" name="username">
    <br>
    <label for="">password</label>
    <input type="text" name="password">
    <br>
    <button type="submit">kirim</button>
    </form>
</body>
</html>