<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Change the email address to your desired recipient
    $to = "songokugohanssj2@gmail.com";
    $subject = "New Contact Form Submission: $subject";
    $headers = "From: $email";

    // Mail content
    $mailContent = "Name: $name\n";
    $mailContent .= "Email: $email\n";
    $mailContent .= "Subject: $subject\n\n";
    $mailContent .= "Message:\n$message";

    // Send email
    mail($to, $subject, $mailContent, $headers);
}
?>
