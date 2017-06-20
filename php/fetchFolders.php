<?php
require('dangerouslyAllowCORS.php');
require('queryDbData.php');
require('connect.php');
$data = json_decode(file_get_contents('php://input'), true);
// Quote and escape form submitted values
// $noteTitle = $db -> quote($data["noteTitle"]); !todo escape submitted values
$userID =  $data["userID"];
$data = getUserData($userID);
echo $data;
?>