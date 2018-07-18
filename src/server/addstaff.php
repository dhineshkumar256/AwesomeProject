<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $STAFF_ID = uniqid();
    $REST_ID = $obj['REST_ID'];
    $STAFF_FNAME = $obj['STAFF_FNAME'];
    $STAFF_LNAME = $obj['STAFF_LNAME'];
    $STAFF_EMAIL = $obj['STAFF_EMAIL'];
    $STAFF_PASSWORD = $obj['STAFF_PASSWORD'];
    $STAFF_ROLE_ID = 1;
    $STATUS_ID = 1;
    $STAFF_PHONE = $obj['STAFF_PHONE'];

    $returnArray = array();

    $Sql_Query = "insert into staff_details
                    (STAFF_ID, STAFF_FNAME, STAFF_LNAME, STAFF_EMAIL, STAFF_PASSWORD, STAFF_PHONE, STAFF_ROLE_ID, STATUS_ID, CREATE_DATE, MODIFY_DATE) values
                    ('$STAFF_ID', '$STAFF_FNAME', '$STAFF_LNAME', '$STAFF_EMAIL', '$STAFF_PASSWORD','$STAFF_PHONE', '$STAFF_ROLE_ID', '$STATUS_ID', now(), now())";

    if(mysqli_query($con,$Sql_Query)){
        $MSG = 'Staff Added Successfully';
        $returnArray['data'] = $MSG;
        echo json_encode($returnArray);
    }else{
        $returnArray['error'] = 'Oops.. Something Went Wrong!!';
        echo json_encode($returnArray);
    }
?>
