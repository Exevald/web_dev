<?php
    header("Content-Type: text/plain");
    $file = fopen('info.txt', 'r+');
    $response = file_get_contents('info.txt', true);
    echo($response);
