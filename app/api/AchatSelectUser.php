<?php

require_once("connectdb.php") ;
session_start();

$Iduser = $_SESSION["Id"] ;

$sqlAchat = "SELECT * FROM Achat WHERE ID_Utilisateur = '$Iduser' " ;
$result   = mysqli_query( $db_conx, $sqlAchat ) ;

if( $result ){

    while( $row[] = mysqli_fetch_array( $result, MYSQLI_ASSOC )  ) ;

    array_pop( $row );
    $rowJson = json_encode( $row  ) ;

    echo $rowJson  ;

}


?>
