<?php
  require('connect.php');

  // connect to db
  $db = new Db();

  // get post data
  $data = json_decode(file_get_contents('php://input'), true);

  // Quote and escape form submitted values
  // $noteTitle = $db -> quote($data["noteTitle"]); !todo escape submitted values

  $noteTitle =  $data["noteTitle"];
  $noteContent = $data["noteContent"];
  $noteID =  $data["noteID"];
  $timestamp = $data["timestamp"];
  $user = $data["userID"];

  $query_column_names="title, content, timestamp, user";
  $query_columns_values="'$noteTitle','$noteContent', '$timestamp', '$user'";
  $query_merged="INSERT INTO notes ($query_column_names) VALUES ($query_columns_values)";

  $result = $db -> query($query_merged);

  if ($result) {
    echo 'Insertion successful';
  }else {
    echo 'Insertion failed';
  }
?>