<?php
    header("Content-Type: text/html");
    const DATA_PATH = 'email.txt';
    $text = $_GET["text"];
    $fields_to_bind = ['first_name', 'last_name', 'email', 'age',];
    $required_fields = ['email'];
    $dataset = [];

    foreach ($required_fields as $value)
        if(empty($_GET[$value]))
            exit('Error of input. In request must be an email');
    $i = 0;
//    foreach ($fields_to_bind as $field) {
//        if ((isset($_GET[$field]) && (is_writable(DATA_PATH))))
//            $dataset[$field] = $fields_to_bind[$i] . ": " . $_GET[$field] . "\n";
//        $i++;
//    }
//    file_put_contents(DATA_PATH, $dataset);
//    echo('Response generated');
