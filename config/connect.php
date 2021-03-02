<?php 

$host = "localhost";
$username = "admin";
$password = "admin";

function getConnect($db_name) {
  try {
    $db = new PDO("mysql:host=" .$host. ";dbname=" . $db_name, $username, $password);
  } catch (PDOException $e) {
      print "Connection error: " . $e->getMessage();
      die();
    }
}

?>