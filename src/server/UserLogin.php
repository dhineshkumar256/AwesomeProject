<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $username = $obj['username'];
    $password = $obj['password'];

    $CheckSQL = "SELECT * FROM restaurunt WHERE REST_EMAIL='$username' AND REST_PASSWORD = '$password'";

    $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
    $returnArray = array();
    $REST_ID = '';

    if(isset($check)){
        foreach ($check as $key => $value) {
            $REST_ID = $check['REST_ID'];
        }
        $MSG = 'LoggedIn Successfully';
        $returnArray['data'] = $MSG;
        $returnArray['REST_ID'] = $REST_ID;
        echo json_encode($returnArray);;
    }else{
        $EmailNotExistMSG = 'Invalid Credentials !!';
        $returnArray['error'] = $EmailNotExistMSG;
        echo json_encode($returnArray);
    }
    mysqli_close($con);
?>
