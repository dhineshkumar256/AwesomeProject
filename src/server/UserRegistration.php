<?php
  include './DBConfig.php';

  $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

  $json = file_get_contents('php://input');
  $obj = json_decode($json,true);

  $name = $obj['name'];
  $email = $obj['email'];
  $password = $obj['password'];

  $CheckSQL = "SELECT * FROM test WHERE email='$email'";

  $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
  $returnArray = array();

  if(isset($check)){
    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
    $returnArray['error'] = $EmailExistMSG;
    echo json_encode($returnArray); ;
  }else {
    $Sql_Query = "insert into test (id,name,email,password) values ('2','$name','$email','$password')";

    if(mysqli_query($con,$Sql_Query)){
      $MSG = 'User Registered Successfully';
      $returnArray['data'] = $MSG;
      echo json_encode($returnArray);;
    }else{
      $returnArray['error'] = 'try again';
      echo $returnArray;
    }
  }
  mysqli_close($con);
?>
