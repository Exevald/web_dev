<?php
    header("Content-Type: text/html");
    if (!$_POST["email"])
        echo("Введите email!");
    else {
        $filename = "../data/" . $_POST["email"] . ".txt";
        $fp = fopen($filename, "r+");

        if ($fp)
            while (($buffer = fgets($fp, 4096)) !== false) {
                echo($buffer . PHP_EOL);
            }
        else
            echo("Такого файла не существует!");
    }