<?php

    const DATA_PATH = "../email.txt";

    if(empty($_GET["text"]))
        exit("Error - empty input");
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