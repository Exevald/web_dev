<?php
    header("Content-Type: text/html");
    $text = $_GET["text"];
    $fields_to_bind = ['first_name', 'last_name', 'email', 'age',];
    $required_fields = ['email'];
    $dataset = [];
    foreach ($required_fields as $value)
        if(empty($_GET[$value]))
            exit("Error of input. In request must be an email");
    $filename = "data/" . $_GET['email'] . ".txt";
    $fp = fopen($filename, 'r+');
    fopen($filename, 'w+');
    $i = 0;
    $name = 'name.txt';
    foreach ($fields_to_bind as $field) {
        if ((isset($_GET[$field])) && (!strpos($fp, $fields_to_bind[$i] . ": " . $_GET[$field]))) {
            $dataset[$field] = $fields_to_bind[$i] . ": " . $_GET[$field] . PHP_EOL;
            fwrite($fp, $dataset[$field]);
        }
        echo($dataset[$field] . ' ');
        $i++;
    }
    echo("Response generated");
