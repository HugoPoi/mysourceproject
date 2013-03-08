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
    $sql = "SELECT `achat`.*,utilisateur.Nom_Utilisateur FROM `achat` JOIN utilisateur ON utilisateur.ID_Utilisateur=`achat`.ID_Utilisateur WHERE `achat`.Commentaire != '' AND `achat`.`ID_Projet`=".$_GET['ID_Projet'];
    $result   = mysqli_query( $db_conx, $sql ) ;
    if($result){
      while( $row2[] = mysqli_fetch_array( $result, MYSQLI_ASSOC )  ) ;
      array_pop( $row2 );
      $row[0]["commentaires"] = $row2;
    }
    array_pop( $row );
    $rowJson = json_encode( $row ) ;

    echo $rowJson  ;
}
}

?>
