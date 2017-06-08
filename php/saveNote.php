<?php
  require('connect.php');

  $data = json_decode(file_get_contents('php://input'), true);

  // Quote and escape form submitted values
//  $name = $db -> quote($_POST['username']);
//  $email = $db -> quote($_POST['email']);

  $noteTitle =  $data["noteTitle"];
  $noteContent = $data["noteContent"];
  $noteID =  $data["noteID"];
  $timestamp = $data["timestamp"];
  $user = $data["userID"];

  $query_column_names="title, content, timestamp, user";
  $query_columns_values="'$noteTitle','$noteContent', '$timestamp', '$user'";
  $query_merged="INSERT INTO notes ($query_column_names) VALUES ($query_columns_values)";

  $db = new Db();
  $result = $db -> query($query_merged);

  if ($result) {
    echo 'successfuly updated';
  }else {
    echo $query_merged;
  }
?>