<?php
  require('dangerouslyAllowCORS.php');
  require('connect.php');
  require('queryDbData.php');
  // connect to db
  $db = new Db();

  // get post data
  $data = json_decode(file_get_contents('php://input'), true);

  // Quote and escape form submitted values
	$title = $db -> quote($data["title"]);
	$content = $db -> quote($data["content"]);
	$noteID =  $db -> quote($data["noteID"]);
	$folderID =  $db -> quote($data["folderID"]);
	$noteTimestamp = $db -> quote($data["noteTimestamp"]);
	$userID = $db -> quote($data["userID"]);

  $table_name = 'notes';
  if ($noteID === "'addNote'") {
      $query_column_names="title, content, noteTimestamp, user, folderID";
      $query_columns_values="$title, $content, $noteTimestamp, $userID, $folderID";
      $query_merged="INSERT INTO $table_name ($query_column_names) VALUES ($query_columns_values)";
      $insert = $db -> query($query_merged);
//      if (!$insert) echo $query_merged;
  } else {
     $query_update_merged="UPDATE $table_name SET title=$title, content=$content, noteTimestamp=$noteTimestamp WHERE id=$noteID AND user=$userID";
     $select = $db -> query($query_update_merged);
//     if (!$select) echo $query_update_merged;
  }

  $return_data = getUserData($userID);
  echo $return_data;
?>