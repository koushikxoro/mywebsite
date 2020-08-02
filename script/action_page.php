<?php
$servername = "localhost";
$username = "id14514540_mydata1";
$password = "6ut**rf7nQ86";
$dbname = "id14514540_mydata";


$link = new mysqli($servername, $username, $password, $dbname);
// Check connection


if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 

$name=$_POST['n1'];
    $contact=$_POST['cno'];
    $mail=$_POST['email'];
    $cmp=$_POST['cmp'];
    $dsg=$_POST['desg'];
    $msg=$_POST['msg'];
 

$sql = "INSERT INTO registration (name, contact, mail, cmp ,dsg ,msg) VALUES ('$name', '$contact', '$mail', '$cmp', '$dsg', '$msg')";
if(mysqli_query($link, $sql)){
    $referer = $_SERVER['HTTP_REFERER'];
    header("Location: $referer");
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 

mysqli_close($link);
?>