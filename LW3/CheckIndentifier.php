<?php
    header("Content-Type: text/plain");
    if(empty($_GET['text']))
        exit('Error - empty input');
    $text = $_GET['text'];
    preg_match('/^[a-zA-Z][a-zA-Z0-9]+/', $text, $matches);
    $length_math = strlen($matches[0]);
    $different = strlen($text) - $length_math;
    if($different > 0)
        exit('Error - char in ' . $length_math . ' position not bet or digit');
    echo 'Success';
