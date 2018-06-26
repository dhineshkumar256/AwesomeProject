<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $REST_ID = $obj['REST_ID'];
    $CAT_NAME = $obj['CAT_NAME'];
    $CAT_ID = uniqid();
    $STATUS_ID = '1';

    $returnArray = array();

    $Sql_Query = "insert into categoery (CAT_ID, REST_ID, CAT_NAME, STATUS_ID, CREATE_DATE, MODIFY_DATE)
                    values ('$CAT_ID', '$REST_ID', '$CAT_NAME', '$STATUS_ID', now(), now())";

    if(mysqli_query($con,$Sql_Query)){
        $MSG = 'Category Created Successfully';
        $returnArray['data'] = $MSG;
        echo json_encode($returnArray);
    }else{
        $returnArray['error'] = 'Oops.. Something Went Wrong!!';
        echo json_encode($returnArray);
    }
?>
