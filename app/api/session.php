<?php

session_start() ;
if(!isset( $SESSION['userlogin']) ){
    $SESSION['userlogin'] = $userlogin ;
    $SESSION['Id']        = $row['ID_Utilisateur'] ; 
}
else{

    $SESSION['userlogin'] = $userlogin ;
    $SESSION['Id']        = $row['ID_Utilisateur'] ; 

}

?>
