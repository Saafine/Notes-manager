<?php
require('dangerouslyAllowCORS.php');
require('connect.php');
//                                                                                                      include('debug.php');
// connect to db
$db = new Db();

// get post data
$data = json_decode(file_get_contents('php://input'), true);

// Quote and escape form submitted values
// $noteTitle = $db -> quote($data["noteTitle"]); !todo escape submitted values


$userID =  $data["userID"];

//                                                                                                                $userID='0';

$folders_query_column_names="id, title, documents, link"; // !todo folder link deprecated
$folders_query_table_name = "folders";
$folders_query_merged="SELECT $folders_query_column_names FROM $folders_query_table_name WHERE user=$userID";
$folders_result = $db -> select($folders_query_merged);

$docs_query_column_names="id, title, timestamp, folderID";
$docs_query_table_name = "notes";
$docs_query_merged="SELECT $docs_query_column_names FROM $docs_query_table_name WHERE user=$userID";
$docs_result = $db -> select($docs_query_merged);

$userData = [];
foreach ($folders_result as $i => $row) {
  $userData[$row['id']] = [
      title => $row['title'],
      link => $row['link'],
      documents => []
  ];
}

foreach ($docs_result as $i => $row) {
  $userData[$row['folderID']]['documents'][$row['id']] = [
    title => $row['title'],
    timestamp => $row['timestamp']
  ];
}

$json_userData = json_encode($userData);
                                                                                                                //console_log($json_userData);
echo json_encode($json_userData);
?>