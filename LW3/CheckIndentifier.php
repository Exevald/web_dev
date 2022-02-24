<?php
    if(empty($_GET['text'])) //проверяем, не пустой ли вход
        exit('Error - empty input');
    $text = $_GET['text'];
    preg_match('/^[a-zA-Z][a-zA-Z0-9]+/', $text, $matches);//проверяем, входят ли в строку только допускаемые символы matches = правильной строке
    $length_math = strlen($matches[0]); //вычисляем длину строки matches
    $different = strlen($text) - $length_math;  //разность длины входной строки и длины строки matches
    if($different > 0)  //если строки не совпадают по длине, то ошибка
        exit('Error - char in ' . $length_math . ' position not bet or digit');
    echo 'Success';
