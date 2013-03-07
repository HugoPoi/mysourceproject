<?php 

session_start() ;
// add a new project to the database 
//connect to the db if not yet
require_once("connectdb.php");

echo 'session'.$_SESSION["userlogin"] ;
// convert json to php

$DATA  = json_decode( file_get_contents("//input") );


//get the value 
$titre         = $DATA -> { Titre_Projet       } ;
$chemin        = $DATA -> { Path_Projet        } ;
$prix          = $DATA -> { Prix_projet        } ;
$chemin_demo   = $DATA -> { Path_Code_Demo     } ;
$desc          = $DATA -> { Description_Projet } ;
$idUser        = $_SESSION ['Id'] ;
$idcat         = $DATA -> { ID_Categorie       } ;

//insert 
$sql   =  " INSERT INTO Projet ( Titre_Projet, Path_Projet, Prix_projet, Path_Code_Demo, Description_Projet, ID_Utilisateur, ID_Categorie ) VALUES ( '$titre', '$chemin', '$prix', '$chemin_demo', '$desc' , '$idUser','$idcat' )" ;


// check the insert

if(mysqli_query( $db_conx,$sql )){
    echo "project added" ;
}
else{
    echo " failed to insert the project : " .mysqli_error() ;
}

?>
