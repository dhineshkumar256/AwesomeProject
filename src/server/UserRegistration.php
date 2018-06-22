<?php
  include './DBConfig.php';

  $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

  $json = file_get_contents('php://input');
  $obj = json_decode($json,true);

  $restname = $obj['restname'];
  $email = $obj['email'];
  $password = $obj['password'];
  $country = $obj['country'];
  $restID = uniqid();

  $CheckSQL = "SELECT * FROM restaurunt WHERE REST_EMAIL='$email'";

  $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
  $returnArray = array();

  if(isset($check)){
    $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';
    $returnArray['error'] = $EmailExistMSG;
    echo json_encode($returnArray);
  }else {
    $Sql_Query = "insert into restaurunt (REST_ID, REST_NAME, REST_EMAIL, REST_PASSWORD, REST_PHONE, REST_COUNTRY,
                                            REST_TIMEZONE, CREATE_DATE, MODIFY_DATE, STATUS_ID, REST_BILL_PLAN_ID)
                    values ('$restID', '$restname', '$email', '$password', '1234', '$country', '123', now(), now(), '1', '123')";

    if(mysqli_query($con,$Sql_Query)){
      $MSG = 'User Registered Successfully';
      $returnArray['data'] = $MSG;
      echo json_encode($returnArray);
    }else{
      $returnArray['error'] = 'Oops.. Something Went Wrong!!';
      echo json_encode($returnArray);
    }
  }
  mysqli_close($con);
?>
