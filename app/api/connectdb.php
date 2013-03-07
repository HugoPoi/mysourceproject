<?php
  header('Content-type: application/json');
  
  $db_conx = mysqli_connect("localhost", "mysourceproject", "AfKaFppHehAD3qBx", "MySourceProject");
  // Evaluate the connection
  if (mysqli_connect_errno()) {
    $outjson = array('error'=>'MySQL Error !!!');
    echo json_encode($outjson);
    die();
    } else {
    //MySQL SUCCESS
  }
