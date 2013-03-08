
<?php

//upload files can get the size $_FILES['file']['size'] 
//input value = file 


$DATA  = json_decode( file_get_contents("php://input") );


$idProjet = isset( $DATA -> { 'ID_Projet' } )? $DATA -> { 'Date_Achat' } : null ;

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
$sql = " UPDATE Projet SET Path_Projet = '$file_dir' WHERE ID_Projet = '$idProjet'" ;

?>

