<?php 

//connect to the db if not yet
require_once("connectdb.php");

echo "in the fonctionnel file user";
// convert json to php
$DATA  = json_decode( file_get_contents("//input") );

//get the value 
$type   = $DATA -> { Type_Utilisateur   } ;
$nom    = $DATA -> { Nom_Utilisateur    } ;
$prenom = $DATA -> { Prenom_Utilisateur } ;
$sexe   = $DATA -> { Sexe_Utilisateur   } ;
$mail   = $DATA -> { Mail_Utilisateur   } ;
$payPal = $DATA -> { Numero_PayPal      } ;
$note   = $DATA -> { Note_Utilisateur   } ;
$mdp    = $DATA -> { mot_de_passe       } ;

//insert 
$sql   =  " INSERT INTO Utilisateur ( Type_Utilisateur, Nom_Utilisateur, Prenom_Utilisateur, Sexe_Utilisateur, Mail_Utilisateur, Numero_PayPal, Note_Utilisateur, mot_de_passe ) VALUES ( '$type', '$nom', '$prenom', '$sexe', '$mail', $payPal, $note, '$mdp' )" ;

// check the insert

if(mysqli_query( $db_conx,$sql )){
    echo "user added" ;
}
else{

    echo " failed to insert the user : " .mysqli_error() ;
}

?>
