<?php

    const DATA_PATH = "email.txt";
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
            exit();

    foreach ($fields_to_bind as $field)
        if(isset($_GET[$field]))
            $dataset[$field] = $_GET[$field];

    file_put_contents(
        DATA_PATH,
        json_encode($dataset)
    );

    echo('ok');