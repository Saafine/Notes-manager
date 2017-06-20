<?php
    require_once('connect.php');
    require('dangerouslyAllowCORS.php');
    require('queryDbData.php'); //
    // connect to db
    $db = new Db();

    // get post data
    $data = json_decode(file_get_contents('php://input'), true);

    $newFolderName = $db -> quote($data["newFolderName"]);
    $userID = $db -> quote($data["userID"]);

    $table_name = 'folders';
    $query_column_names="title, user";
    $query_columns_values="$newFolderName, $userID";

    $query_merged="INSERT INTO $table_name ($query_column_names) VALUES ($query_columns_values)";
    $insert = $db -> query($query_merged);

    $return_data = getUserData($userID);
    echo $return_data;
  ?>