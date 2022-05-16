<?php 

$honeypot = filter_input(INPUT_POST, 'nickname', FILTER_SANITIZE_STRING);
if ($honeypot) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
    exit;
}

$message_sent = false;
if(isset($_POST['email']) && ($_POST['email']) !='') {
    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $to = "info@reijaweckman.com"; // this is your email address
    $from = $_POST['email']; // this is the sender's email address
    $name = $_POST['name'];
    $company = $_POST['company'];
    $subject = "Form submission";
    $message = $name . " from" . $company . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers  = "From: $name <$from>\n"; 
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "X-Priority: 1\n"; // Urgent message!
    $headers .= "Return-Path: $to\n"; // Return path for errors
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
    
    mail($to, $subject, $message, $headers);

    $message_sent = true;
    header("Location: thank_you.html");
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    } else {
    echo "Something went wrong. Please try again!";
    } 
}
?>