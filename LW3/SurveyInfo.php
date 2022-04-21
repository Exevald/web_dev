<?php
    header("Content-Type: text/plain");
    $email = $_GET["email"];
    $filename = "data/" . $email . ".txt";
    $fp = null;
    if(empty($email))
        exit("Введите email!");
    if (file_exists($filename)) {
        $fp = fopen($filename, "r");
    }
    else
        echo("Файл не найден!");
    if ($fp) {
        while (($buffer = fgets($fp, 4096)) !== false) {
            echo($buffer . PHP_EOL);
        }
        if (!feof($fp)) {
            echo "Ошибка!";
        }
        fclose($fp);
    }
