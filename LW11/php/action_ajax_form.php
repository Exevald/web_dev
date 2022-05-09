<?php
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["%activity$"]))
    {
        $result = array(
            "name" => $_POST["name"],
            "email" => $_POST["email"],
            "%activity%" => $_POST["%activity%"]
        );
        echo json_encode($result);
    }