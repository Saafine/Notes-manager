<?php
  require('dangerouslyAllowCORS.php');
  require('connect.php');
  require('queryDbData.php'); // !todo double connect required, fix?
  // connect to db
  $db = new Db();

  // get post data
  $data = json_decode(file_get_contents('php://input'), true);

  // Quote and escape form submitted values
  // $noteTitle = $db -> quote($data["noteTitle"]); !todo escape submitted values

  $title =  $data["title"];
  $content = $data["content"];
  $noteID =  $data["noteID"];
  $folderID =  $data["folderID"];
  $noteTimestamp = $data["noteTimestamp"];
  $userID = $data["userID"];

  $table_name = 'notes';

  if ($noteID === 'addNote') {
      $query_column_names="title, content, noteTimestamp, user, folderID";
      $query_columns_values="'$title','$content', '$noteTimestamp', '$userID', '$folderID'";
      $query_merged="INSERT INTO $table_name ($query_column_names) VALUES ($query_columns_values)";
      $insert = $db -> query($query_merged);
  } else {
     $query_update_merged="UPDATE $table_name SET title='$title', content='$content', noteTimestamp='$noteTimestamp' WHERE id=$noteID AND user='$userID'";
     $select = $db -> query($query_update_merged);
  }
  
  $data = getUserData($userID);
  echo $data;
?>