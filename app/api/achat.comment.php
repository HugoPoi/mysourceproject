<?php 

// add a new purchase to an account 
//connect to the db if not yet
require_once("connectdb.php");
session_start() ;

//convert json to php
$DATA  = json_decode( file_get_contents("php://input") );

if(isset($_SESSION["Id"])){


//get the value 
$note     = isset($DATA -> { 'Note_Achat'  })? $DATA -> { 'Note_Achat'  } : null;
$comment  = isset($DATA -> { 'Commentaire' })? $DATA -> { 'Commentaire' } : null;
$idProjet = isset($DATA -> { 'ID_Projet'   })? $DATA -> { 'ID_Projet'   } : null;


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

