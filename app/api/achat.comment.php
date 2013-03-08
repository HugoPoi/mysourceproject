<?php 

// add a new purchase to an account 
//connect to the db if not yet
require_once("connectdb.php");
session_start() ;

//convert json to php
$DATA  = json_decode( file_get_contents("php://input") );

if(isset($_SESSION["Id"])){
  
$idProjet = isset($DATA -> { 'ID_Projet'   })? $DATA -> { 'ID_Projet'   } : null;

$sql = "SELECT * FROM Achat WHERE ID_Projet = '$idProjet' AND ID_Utilisateur= '".$_SESSION["Id"]."' ";
if($result = mysqli_query( $db_conx,$sql )){
  $old_comment = mysqli_fetch_array( $result, MYSQLI_ASSOC );
}

//get the value 
$note     = isset($DATA -> { 'Note_Achat'  })? $DATA -> { 'Note_Achat'  } : $old_comment['Note_Achat'];
$comment  = isset($DATA -> { 'Commentaire' })? $DATA -> { 'Commentaire' } : $old_comment['Commentaire'];


//insert 
$sql   =  " UPDATE Achat SET Note_Achat = '$note', Commentaire = '$comment' WHERE ID_Projet = '$idProjet' AND ID_Utilisateur= '".$_SESSION["Id"]."' " ;

// check the insert
if(mysqli_query( $db_conx,$sql )){
    echo json_encode(array('success' => ' Commentaire enregistré ')) ;
}
else{
    echo json_encode(array('error' => 'Error SQL' )) ;
}
}

