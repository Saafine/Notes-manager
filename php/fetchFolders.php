<?php
require_once('connect.php');
require('dangerouslyAllowCORS.php');
require('queryDbData.php');

$db = new Db();
$data = json_decode(file_get_contents('php://input'), true);

$userID = $db -> quote($data["userID"]);
$data = getUserData($userID);
echo $data;
?>