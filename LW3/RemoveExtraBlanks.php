<?php
    header("Content-Type: text/plain");
    $text = $_GET["text"];
    $text = preg_replace('/\s+/', ' ', $text); //Заменяется непрерывная строка пробелов на 1 пробел
    echo trim($text);