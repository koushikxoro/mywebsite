<?php
$servername = "localhost";
$username = "id14514540_mydata1";
$password = "6ut**rf7nQ86";
$dbname = "id14514540_mydata";

// Create connection
$link = new mysqli($servername, $username, $password, $dbname);
// Check connection


if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$cpn=$_POST['n1'];
    $dsg=$_POST['do'];
    $sal=$_POST['so'];
    $cpn=$_POST['cpn'];
    $cppn=$_POST['cppn'];
    $msg=$_POST['message-text'];
 
// Attempt insert query execution
$sql = "INSERT INTO `job offered` (company, desi, sal, copn ,coppn ,mesg) VALUES ('$cpn', '$dsg', '$sal', '$cpn', '$cppn', '$msg')";
if(mysqli_query($link, $sql)){
    $referer = $_SERVER['HTTP_REFERER'];
    header("Location: $referer");
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>