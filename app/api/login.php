<?php

require_once("connectdb.php");
echo "in login" ;

$arras = array( Mail_Utilisateur => "seyuf@hotmail.com", mot_de_passe => "amke" ) ; 

$jsonVar = json_encode( $arras ) ;
$DATA    = json_decode( $jsonVar ) ;

//log the user
//$DATA     = json_decode( file_get_contents("//input") ) ;

if( isset($userlogin ) ){
    echo ' your Already logged in ' ;
}
else{

    $userlogin   = $DATA -> { Mail_Utilisateur } ;
    $logMdp      = $DATA -> { mot_de_passe     } ;

    $sqlCheckLog = "SELECT * FROM Utilisateur WHERE Mail_Utilisateur = '$userlogin' AND mot_de_passe = '$logMdp' " ; 
    $result = mysqli_query ( $db_conx,$sqlCheckLog ) ;

    


    if( $result ){

    $row   = mysqli_fetch_array($result, MYSQLI_ASSOC);

        include 'session.php';
        echo ' utilisateurIS' .$SESSION['Id'];

    }
    else{
        echo ' does not exit redirecting to sign In' ;
    }

}
?>
