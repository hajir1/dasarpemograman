<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name = $_FILES["gambar"]["name"];
    $size = $_FILES["gambar"]["size"];
    $item_name = $_FILES["gambar"]["tmp_name"];
    $error = $_FILES["gambar"]["error"];
    $type = $_FILES["gambar"]["type"];
    move_uploaded_file($item_name , __DIR__ . "/file/" . $name);
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

    <form action="" method="post" enctype="multipart/form-data">
        <label for="">file</label>
            <input type="file" name="gambar" id="">
            <br>
            <button type="submit">kirim</button>
    </form>
</body>
</html>