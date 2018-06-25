<?php
     $nameSurname = htmlspecialchars($_POST['nameSurname']);
     $mail = htmlspecialchars($_POST['email']);
     $message = htmlspecialchars($_POST['message']);
     $to      = 'emresert1233@gmail.com';
     $subject = 'Web Sitenden Mesaj Var!';
     $message = "$message";
     $headers = "From: $mail\r\n" .
         "Reply-To: $mail\r\n" .
         'X-Mailer: PHP/' . phpversion();
     
     mail($to, $subject, $message, $headers);
     echo "<br><i><b> Sayın $nameSurname mailiniz başarılı bir şekilde alınmıştır.Anasayfaya yönlendiriliyorsunuz.</b></i>";
     header("Refresh: 7; url=/");
     ?> 
      