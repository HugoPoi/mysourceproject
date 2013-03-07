<?php 

// add a new project to the database 
//connect to the db if not yet
require_once("connectdb.php");

// convert json to php

$DATA  = json_decode( file_get_contents("//input") );
echo "\n".'inserting project' ;

//get the value 
$titre         = $DATA -> { Titre_Projet       } ;
$chemin        = $DATA -> { Path_Projet        } ;
$prix          = $DATA -> { Prix_projet        } ;
$chemin_demo   = $DATA -> { Path_Code_Demo     } ;
$desc          = $DATA -> { Description_Projet } ;

//insert 
$sql   =  " INSERT INTO Projet ( Titre_Projet, Path_Projet, Prix_projet, Path_Code_Demo, Description_Projet ) VALUES ( '$titre', '$chemin', '$prix', '$chemin_demo', '$desc' )" ;

// check the insert

if(mysqli_query( $db_conx,$sql )){
    echo "project added" ;
}
else{
    echo " failed to insert the project : " .mysqli_error() ;
}

?>
