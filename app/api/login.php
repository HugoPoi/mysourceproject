<?php
  
  session_start();
  
  require_once("connectdb.php");
  
  $DATA = json_decode( file_get_contents("php://input") ) ;
  
  if( isset($_SESSION['userlogin']) ){
  
    //DECONNEXION
    if(isset($DATA -> { 'deconnection' })){
      session_destroy();
      die();
    }
    
    $sqlCheckLog = "SELECT * FROM Utilisateur WHERE ID_Utilisateur = '".$_SESSION['Id']."' " ; 
    $result = mysqli_query ( $db_conx,$sqlCheckLog ) ;
    
    if( $result ){
      
      $row   = mysqli_fetch_array($result, MYSQLI_ASSOC);
      $outjson = $row;
      
    }
    else{
      $outjson = array('error'=>'MySQL Error !!!');
    }
  }
  else{
    
    $userlogin   = isset($DATA -> { 'Mail_Utilisateur' }) ? $DATA -> { 'Mail_Utilisateur' } : null ;
    $logMdp      = isset($DATA -> { 'mot_de_passe'     }) ? $DATA -> { 'mot_de_passe'     } : null ;
    
    $sqlCheckLog = "SELECT * FROM Utilisateur WHERE Mail_Utilisateur = '$userlogin' AND mot_de_passe = '$logMdp' " ; 
    $result = mysqli_query ( $db_conx,$sqlCheckLog ) ;
    $row   = mysqli_fetch_array($result, MYSQLI_ASSOC);
    if( isset($row['Mail_Utilisateur']) ){
      $_SESSION['userlogin'] = $row['Mail_Utilisateur'];
      $_SESSION['Id'] = $row['ID_Utilisateur'];
      $outjson = $row;
    }
    else{
      $outjson = array('error'=>'compte inconnu');
    }
    
  }
  
  echo json_encode($outjson);
  
