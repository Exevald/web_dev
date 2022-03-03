<?php
    header("Content-Type: text/plain");
    const DATA_PATH = 'answer.txt';
    $text = $_GET["text"];
    $fields_to_bind = [
        'first_name',
        'last_name',
        'email',
        'age',
    ];
    $required_fields = ['email'];
    $dataset = [];

    foreach ($required_fields as $value)
        if(empty($_GET[$value]))
            exit('Error of input');
    $i = 0;
    foreach ($fields_to_bind as $field) {
        if (isset($_GET[$field]))
            $dataset[$field] = $fields_to_bind[$i] . ": " . $_GET[$field] . "\n";
        $i++;
    }
    file_put_contents(
        DATA_PATH,
        $dataset,
    );
    echo('Response generated');