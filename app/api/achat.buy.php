<?php 

// add a new purchase to an account 
//connect to the db if not yet
require_once("connectdb.php");
session_start() ;

//convert json to php
$DATA  = json_decode( file_get_contents("php://input") );

if(isset($_SESSION["Id"])){


//get the value 
$date     = isset($DATA -> { 'Date_Achat'  })? $DATA -> { 'Date_Achat'  } : null;
$note     = isset($DATA -> { 'Note_Achat'  })? $DATA -> { 'Note_Achat'  } : null;
$comment  = isset($DATA -> { 'Commentaire' })? $DATA -> { 'Commentaire' } : null;
$iduser   = $SESSION["Id"] ;
$idProjet = isset($DATA -> { 'ID_Projet'   })?  : null;


//insert 
$sql   =  " INSERT INTO Achat ( Date_Achat, Note_Achat, Commentaire, ID_ ) VALUES ( '$date', $note, '$comment', '$iduser', '$idProjet' )" ;

// check the insert
if(mysqli_query( $db_conx,$sql )){
    echo json_encode(array('success' => 'Achat enregistré !')) ;
}
else{
    echo json_encode(array('error' => mysqli_error() )) ;
}
}

