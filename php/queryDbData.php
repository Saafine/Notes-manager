<?php
function getUserData($userID) {
  $db = new Db();
  $folders_query_column_names="id, title, documents";
  $folders_query_table_name = "folders";
  $folders_query_merged="SELECT $folders_query_column_names FROM $folders_query_table_name WHERE user=$userID";
  $folders_result = $db -> select($folders_query_merged);

  $docs_query_column_names="id, title, noteTimestamp, folderID";
  $docs_query_table_name = "notes";
  $docs_query_merged="SELECT $docs_query_column_names FROM $docs_query_table_name WHERE user=$userID";
  $docs_result = $db -> select($docs_query_merged);

  $userData = [];
  foreach ($folders_result as $i => $row) {
    $userData[$row['id']] = [
        title => $row['title'],
        documents => []
    ];
  }

  foreach ($docs_result as $i => $row) {
    $userData[$row['folderID']]['documents'][$row['id']] = [
      title => $row['title'],
      timestamp => $row['noteTimestamp']
    ];
  }

  $json_userData = json_encode($userData);
  return $json_userData;
}
?>