<?php 

// add a new purchase to an account 
//connect to the db if not yet
require_once("connectdb.php");
session_start() ;

//convert json to php
$DATA  = json_decode( file_get_contents("//input") );

echo "session in achat" .$_SESSION["Id"] ;


//get the value 
$date    = $DATA -> { Date_Achat  } ;
$note    = $DATA -> { Note_Achat  } ;
$comment = $DATA -> { Commentaire } ;


echo "\n".'Nom on purchase';

//insert 
$sql   =  " INSERT INTO Achat ( Date_Achat, Note_Achat, Commentaire ) VALUES ( '$date', $note, '$comment' )" ;

// check the insert
if(mysqli_query( $db_conx,$sql )){
    echo "\n purchase added" ;
}
else{
    echo "\n failed to insert the purchase : " .mysqli_error() ;
}

?>
