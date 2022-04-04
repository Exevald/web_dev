<?php
    header("Content-Type: text/html");
    $text = $_GET["text"];
    $filename = 'data/' . $_GET['email'] . '.txt';
    $fields_to_bind = ['first_name', 'last_name', 'email', 'age',];
    $required_fields = ['email'];
    $dataset = [];
    fopen($filename, 'r+');

    foreach ($required_fields as $value)
        if(empty($_GET[$value]))
            exit('Error of input. In request must be an email');
    $i = 0;
    foreach ($fields_to_bind as $field) {
        if ((isset($_GET[$field])) && (!strpos(file_get_contents($filename), $fields_to_bind[$i]))) {
            $dataset[$field] = $fields_to_bind[$i] . ": " . $_GET[$field] . "\n";
            echo($dataset[$field] . ' ');
        }
        file_put_contents($filename, $dataset);
        $i++;
    }
    echo('Response generated');
