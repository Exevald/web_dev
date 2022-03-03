<?php
    header("Content-Type: text/plain");
    const DATA_PATH = "answer.txt";
    $text = $_GET["text"];
    $fields_to_bind = [
        'first_name',
        'last_name',
        'email',
        'age'
    ];
    $required_fields = [
        'email'
    ];
    $dataset = [];

    foreach ($required_fields as $value)
        if(empty($_GET[$value]))
            exit('Error of input');

    foreach ($fields_to_bind as $field)
        if(isset($_GET[$field]))
            $dataset[$field] = $_GET[$field];

    file_put_contents(
        DATA_PATH,
        implode("\n", $dataset),
    );
    echo('Response generated');