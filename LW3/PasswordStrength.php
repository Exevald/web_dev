<?php
    header("Content-Type: text/plain");
    if(empty($_GET['text']))
        exit('Error - empty input');
    $text = $_GET['text'];

    preg_match('/^[a-zA-Z0-9]+/', $text, $matches);

    $length = strlen($matches[0]);
    $different = strlen($text) - $length;

    if($different > 0)
        exit('Error - char in ' . $length . ' position not english bet or digit');
    else {
        $allSymbol = array();
        $security = 0;
        $digits = 0;
        $uppercase = 0;
        $lowercase = 0;
        $bets = 0;
        $countRepeatSymbol = 0;

        for ($i = 0; $i < $length; $i++) {
            $char = $text[$i];
            if (ctype_digit($char))
                $digits++;
            else {
                $bets++;
                if (ctype_upper($char))
                    $uppercase++;
                else
                    $lowercase++;
            }
            if (in_array($char, $allSymbol))
                $countRepeatSymbol += 2;
            else
                $allSymbol[] = $char;
        }

        $security += 4 * $length;
        $security += 4 * $digits;

        if ($uppercase > 0)
            $security += 2 * ($length - $uppercase);
        if ($lowercase > 0)
            $security += 2 * ($length - $lowercase);

        if ($bets == $length)
            $security -= $length;
        if ($digits == $length)
            $security -= $length;

        $security -= $countRepeatSymbol;

        echo('Security = ' .  $security);
    }