<?php
  require('dangerouslyAllowCORS.php');
  require_once('connect.php');

  // connect to db
  $db = new Db();

  // get post data
  $data = json_decode(file_get_contents('php://input'), true);

  $noteID = $db -> quote($data["noteID"]);
  $user = $db -> quote($data["userID"]);

  $query_column_names="title, content";
  $query_table_name = "notes";
  $query_merged="SELECT $query_column_names FROM $query_table_name WHERE user=$user AND id=$noteID";

  $result = $db -> select($query_merged);
  $note = [
    title => $result[0]['title'],
    content => $result[0]['content'],
	];

  if ($result) {
    echo json_encode($note);
  }else {
    http_response_code(400); // bad request
  }
?>