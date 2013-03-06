
<?php
 //header("content-type":application/json");
//$Comments = '{ Commentaire:"jdjdjhgdjdhjd"}'
$data    = file_get_contents("./testJson.json") ;
$jsonVar = json_decode( $data ) ;
require_once("connectdb.php");
mysqli_query( $db_conx,"INSERT INTO Commentaire ( Commentaire )
    VALUES (json_encode( $jsonVar )" );



      
?>
