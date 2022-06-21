<?php

$conn = mysqli_connect("localhost", "root", "", "comp2003");

if($conn === false){
    die("ERROR: Could not connect. " 
        . mysqli_connect_error());
}

$title = $_REQUEST['title'];
$first_name =  $_REQUEST['first_name'];
$last_name = $_REQUEST['last_name'];
$phoneNum = $_REQUEST['phone_number'];
$password =  $_REQUEST['password'];
$address = $_REQUEST['address'];
$email = $_REQUEST['email'];
$paymentMethod = $_REQUEST['payment_method'];
$contactMethod = $_REQUEST['contact_method'];
$interests = $_REQUEST['interests'];


$sql = "INSERT INTO users VALUES('$title','$first_name','$last_name','$phoneNum','$password','$address','$email','$paymentMethod','$contactMethod','$interests')";

if(mysqli_query($conn, $sql)){
    echo "<h3>data stored in a database successfully." 
        . " Please browse your localhost php my admin" 
        . " to view the updated data</h3>"; 

    echo nl2br("\n$title \n$first_name\n $last_name\n "
        . "$phoneNum\n $password\n $address\n $email \n $paymentMethod \n '$contactMethod' \n $interests\n");
} else{
    echo "ERROR: Hush! Sorry $sql. " 
        . mysqli_error($conn);
}
  
// Close connection
mysqli_close($conn);

?>

