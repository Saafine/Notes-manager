<?php
  require_once('connect.php');
  require('dangerouslyAllowCORS.php');
  require('queryDbData.php'); //
  // connect to db
  $db = new Db();

  // get post data
  $data = json_decode(file_get_contents('php://input'), true);

  // Quote and escape form submitted values
  // $noteTitle = $db -> quote($data["noteTitle"]); !todo escape submitted values

  $newFolderName =  $data["newFolderName"];
  $userID = $data["userID"];

  $table_name = 'folders';
  $query_column_names="title, user";
  $query_columns_values="'$newFolderName','$userID'";

  $query_merged="INSERT INTO $table_name ($query_column_names) VALUES ($query_columns_values)";
  $insert = $db -> query($query_merged);

  $data = getUserData($userID);
  echo $data;
?>