<?php 

require_once("connectdb.php") ;
session_start();


if(isset($_GET['ID_Projet'])){

$sql = "SELECT * FROM Projet WHERE ID_Projet = '".$_GET['ID_Projet']."' " ;
if(isset($_SESSION['Id'])){
$sql = "SELECT * FROM Projet,(SELECT COUNT(*) as buy FROM achat where `ID_Projet`='".$_GET['ID_Projet']."' AND ID_Utilisateur='".$_SESSION['Id']."') as achatuser WHERE projet.ID_Projet =".$_GET['ID_Projet'];
}
$result   = mysqli_query( $db_conx, $sql ) ;

if($result){

    while( $row[] = mysqli_fetch_array( $result, MYSQLI_ASSOC )  ) ;

    array_pop( $row );
    $rowJson = json_encode( $row ) ;

    echo $rowJson  ;
}
}

?>
