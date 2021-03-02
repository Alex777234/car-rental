<?php 

require_once '../config/connect.php';

getConnect('users');

$result = $db->query("SELECT * FROM users");
while ($row = $result->fetch()) {
  echo '<pre>';
  print_r($row);
}


?>