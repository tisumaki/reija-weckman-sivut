<?php 
if(isset($_POST['submit'])){
    $to = "makelatiia@hotmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $company = $_POST['company'];
    $subject = "Form submission";
    $message = $name . " from" . $company . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers  = "From: testsite <mail@testsite.com>\n";
    $headers .= "Cc: testsite <mail@testsite.com>\n"; 
    $headers .= "X-Sender: testsite <mail@testsite.com>\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "X-Priority: 1\n"; // Urgent message!
    $headers .= "Return-Path: mail@testsite.com\n"; // Return path for errors
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
    
    mail($to, $subject, $message, $headers);
    
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>