<?php
    if(empty($_GET['text']))
        exit('Ошибка - пустой вход');
    $text = $_GET["text"];
    preg_match("/^[a-zA-Z][a-zA-Z0-9]+/", $text, $matches);//проверяем, входят ли в строку только допускаемые символы matches = правильной строке
    if(count($matches) <= 1)//если первый символ неправильный()
        exit("Error - first char not alphabet char");
    /*if(!ctype_alpha(substr($text, 0)))
        exit('Ошибка - первый симбол цифра');*/
    echo ('Успешно');