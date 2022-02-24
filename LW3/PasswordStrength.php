<?php
    if(empty($_GET["text"]))
        exit("Error - empty input");
    $text = $_GET["text"];

    preg_match("/^[a-zA-Z][a-zA-Z0-9]+/", $text, $matches);
    $length = strlen($matches[0]);
    $different = strlen($text) - $length;
    if($different > 0)
        exit("Error - char in " . $length . " position not english bet or digit");
    $allSymbol = array();
    $security = 0;
    $digits = 0; //Цифры
    $uppercase = 0;
    $lowercase = 0;
    $bets = 0; //Буквы
    $countRepeatSymbol = 0;

    for($i = 0; $i < $length; $i++)
    {
        $char = $text[$i];
        if (ctype_digit($char))
            $digits++;
        else
        {
            $bets++;
            if(ctype_upper($char))
                $uppercase++;
            else
                $lowercase++;
        }
        if(in_array($char, $allSymbol))
            $countRepeatSymbol += 2;
        else
            $allSymbol[] = $char;

    }
    $security += 4 * $length;
    $security += 4 * $digits;
    $security += 2 * ($length - $uppercase);
    $security += 2 * ($length - $lowercase);
    if($bets == $length)
        $security -= $length;
    if($digits == $length)
        $security -= $length;
    $security -= $countRepeatSymbol;
    echo("Security = " . $security);