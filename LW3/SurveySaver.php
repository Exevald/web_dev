<?php
    header("Content-Type: text/html");
    $text = $_GET["text"];
    $filename = 'data/' . $_GET['email'] . '.txt';
    $fields_to_bind = ['first_name', 'last_name', 'email', 'age',];
    $required_fields = ['email'];
    $dataset = [];

    foreach ($required_fields as $value)
        if(empty($_GET[$value]))
            exit('Error of input. In request must be an email');
    $i = 0;
    foreach ($fields_to_bind as $field) {
        if (isset($_GET[$field]))
            $dataset[$field] = $fields_to_bind[$i] . ": " . $_GET[$field] . "\n";
        $i++;
    }
    file_put_contents($filename, $dataset);
    echo('Response generated');
