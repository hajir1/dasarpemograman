<?php
$bil = 0;
if(isset($_POST["angka"])){
    $bil = $_POST["angka"];
}
$message = "";
if($bil % 2 == 0){
    $message = "$bil ini bilangan genap";
}else {
    $message = "$bil ini bilangan ganjil";
}
?>


<form action="index.php" method="post">
    <input type="number" placeholder="masukkan angka" name="angka">
    <button type="submit">kirim</button>
    <?=$message?>
</form>

