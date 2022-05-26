<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);


//формирую ответ
http_response_code(200);
$json = array(
    'status' => 200,
    'message' => 'Success',
    'loaded-content' => $data,
);

$name = $data['name'];
$email = $data['email'];
$activity = $data['activity'];

if (($name === '') || ($email === '')) {
    //меняю ответ если пустые поля + в идеале проверка на валидность
    http_response_code(500);
    $json = array(
        'status' => 500,
        'message' => 'Empty field error',
        'loaded-content' => $data,
    );
} else {

    $fName = '../data/' . $email . '.txt';
    $fp = fopen($fName, 'w');

    $text = $name . PHP_EOL . $email . PHP_EOL;

    switch ($activity) {
        case "programmer":
            $text = $text . "Программист" . PHP_EOL;
            break;
        case "designer":
            $text = $text . "Дизайнер" . PHP_EOL;
            break;
        case "marketer":
            $text = $text . "Маркетолог" . PHP_EOL;
            break;
    }

    $ok = fwrite($fp, $text);

    if (!$ok) {
        //меняю ответ если пустые поля + в идеале проверка на валидность
        http_response_code(500);
        $json = array(
            'status' => 500,
            'message' => 'File write error',
            'loaded-content' => $data,
        );
    }

    fclose($fp);
}

echo json_encode($json, JSON_UNESCAPED_UNICODE);