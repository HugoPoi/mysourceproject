<?php 
session_start();
//connect to the db if not yet
require_once("connectdb.php");

if($_SERVER['REQUEST_METHOD'] == 'PUT'){

//$_SESSION['debug'] = file_get_contents("php://input");
// convert json to php
$DATA  = json_decode( file_get_contents("php://input") );

//get the value 
$type   = $DATA -> { 'Type_Utilisateur'   } ;
$nom    = $DATA -> { 'Nom_Utilisateur'    } ;
$prenom = $DATA -> { 'Prenom_Utilisateur' } ;
$sexe   = $DATA -> { 'Sexe_Utilisateur'   } ;
$mail   = $DATA -> { 'Mail_Utilisateur'   } ;
$payPal = $DATA -> { 'Numero_PayPal'      } ;
$mdp    = $DATA -> { 'mot_de_passe'       } ;

//insert 
$sql   =  " INSERT INTO Utilisateur ( Type_Utilisateur, Nom_Utilisateur, Prenom_Utilisateur, Sexe_Utilisateur, Mail_Utilisateur, Numero_PayPal, mot_de_passe ) VALUES ( '$type', '$nom', '$prenom', '$sexe', '$mail', $payPal, '$mdp' )" ;

// check the insert

if(mysqli_query( $db_conx,$sql )){
    echo "user added" ;
}
else{

    echo " failed to insert the user : " .mysqli_error() ;
}
}
