<?php
    if(empty($_GET['text']))
        exit('Ошибка - пустой вход');
    $text = $_GET["text"];
    preg_match("/^[a-zA-Z][a-zA-Z0-9]+/", $text, $matches); //проверяем, входят ли в строку только допускаемые символы matches = правильной строке
    if(count($matches) <= 1)
        exit('Ошибка - первый симбол не буква');
    $length_math = strlen($matches[0]);
    $different = strlen($text) - $length_math;
    if($different > 0)
        exit('Ошибка - символ в ' . $length_math . 'позиции не цифра');
    echo ('Успешно');