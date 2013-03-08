<?php

//upload files can get the size $_FILES['file']['size'] 
//input value = file 
session_start() ;
// add a new project to the database 
//connect to the db if not yet
require_once("connectdb.php");



$idProjet = $_POST['ID_Projet'] ;

//get  get the file 
$file_dir = __DIR__ .'/uploadedFiles';
if (!file_exists($file_dir))
    mkdir($file_dir, 0755, true);

//$tot = $_FILES['file'] ;
//$One = $tot['tmp_name'] ;  $_FILES['file']['tmp_name'] ;

foreach( $_FILES as $file ){
    if ( !$file['error'] ){


        // move files in api/uploadedFiles/
        move_uploaded_file( $file['tmp_name'], $file_dir . '/' . $file['name']);
        unset($file['tmp_name']);
        unset($file['error']);

    }

}

// store the path in project  
$sql = " UPDATE Projet SET Path_Projet = '".$file['name']."' WHERE ID_Projet = '$idProjet'" ;

if(mysqli_query( $db_conx,$sql )){
    echo json_encode(array('success' => 'upload OK ! ')) ;
}
else{
    echo json_encode(array('error' => 'erreur d\'upload ! ')) ;
}
