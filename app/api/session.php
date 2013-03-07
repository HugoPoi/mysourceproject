<?php

session_start() ;
if(isset( $SESSION['userlogin']) ){
    $userlogin = $SESSION['userlogin'];
    $userid = $SESSION['Id']; 
}
else{
  
  //EXPIRED SESSION
  
}

?>
