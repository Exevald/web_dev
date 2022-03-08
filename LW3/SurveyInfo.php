<?php
    header("Content-Type: text/plain");
    const DATA_PATH = 'email.txt';
    $text = $_GET["text"];
    $fields_to_bind = [
        'first_name',
        'last_name',
        'email',
        'age',
    ];
    $required_fields = ['email'];
    $dataset = [];

