<?php
  require_once('connect.php');
  require('dangerouslyAllowCORS.php');
  require('queryDbData.php');
  // connect to db
  $db = new Db();

  // get post data
  $data = json_decode(file_get_contents('php://input'), true);

  // Quote and escape form submitted values
  // $noteTitle = $db -> quote($data["noteTitle"]); !todo escape submitted values

  $userID = $data["userID"];
  $deleteWhat = $data["deleteWhat"];
  $deleteID = $data["deleteID"];

  if ($deleteWhat === 'folder') {
    $table_name = 'folders';
  }else if ($deleteWhat === 'note') {
    $table_name = 'notes';
  }

  $query_merged = "DELETE FROM $table_name WHERE user=$userID AND id=$deleteID";
  $delete = $db -> query($query_merged);

  // if successfuly deleted folder, delete all notes from that folder
  if ($delete && $table_name === 'folders') {
    $delete_notes_query_merged = "DELETE FROM notes WHERE user=$userID AND folderID=$deleteID";
    $delete_notes = $db -> query($delete_notes_query_merged);
  }


  // get updated userData
  $data = getUserData($userID);
  echo $data;
?>