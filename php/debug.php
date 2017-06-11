<?php
  function console_log($json) {
    echo '<script>';
    echo 'console.log('.$json.')';
    echo '</script>';
  }
?>