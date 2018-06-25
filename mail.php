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
     echo "<h3><br><i><b><center> Sayın <u>$nameSurname</u> mailiniz başarılı bir şekilde alınmıştır"."</center></h3></b></i>";
     ?> 
     <html>
         <head>
             <link rel="stylesheet" href="css/font-awesome.css">
             <body>
                 <center><a href="index.html" style="text-decoration:none;Cursor:pointer;Color:black;"><i class="fa fa-home fa-2x"></i>Anasayfaya dönmek için tıklayınız.</a></div></center>
             </body>
         </head>
     </html>