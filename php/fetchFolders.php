<?php
  require('dangerouslyAllowCORS.php');
  require('connect.php');

  // connect to db
  $db = new Db();

  // get post data
  $data = json_decode(file_get_contents('php://input'), true);

  // Quote and escape form submitted values
  // $noteTitle = $db -> quote($data["noteTitle"]); !todo escape submitted values

	$userID =  $data["userID"];
  $query_column_names="title, documents, link";
  $query_table_name = "folders";
  $query_merged="SELECT $query_column_names FROM $query_table_name WHERE user=$userID";

  $result = $db -> select($query_merged);

	$folders = array();
	foreach ($result as $i => $row) {
		$folders[$i] = array();
		array_push($folders[$i], $row['title'], $row['documents'], $row['link']);
	}

 if ($result) {
   echo json_encode($folders);
 }else {
 // var_dump(http_response_code(201))
   echo $query_merged;
 }
?>