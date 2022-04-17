<?php
    header("Content-Type: text/html");
    $filename = "data/" . $_POST["email"] . ".txt";
    $fp = fopen($filename, 'w+');
    $fields_to_post = ["Email", "Имя"];
    $fields_to_get = ["email", "name"];
    for ($i = 0; $i <= count($fields_to_post) - 1; $i++) {
        $answer = $fields_to_post[$i] . ": " . $_POST[$fields_to_get[$i]] . PHP_EOL;
        fwrite($fp, $answer);
    }
    fwrite($fp, "Деятельность: ");
    $act = $_POST["%activity%"];
    switch ($act) {
        case "programmer":
            fwrite($fp, "Программист");
            break;
        case "designer":
            fwrite($fp, "Дизайнер");
            break;
        case  "marketer":
            fwrite($fp, "Маркетолог");
    }