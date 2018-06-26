<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $CAT_NAME = $obj['CAT_NAME'];
    $CAT_ID = $obj['CAT_ID'];
    $STATUS_ID = '1';

    $returnArray = array();

    $Sql_Query = "UPDATE categoery SET CAT_NAME = '$CAT_NAME', STATUS_ID = '$STATUS_ID', MODIFY_DATE = now() WHERE CAT_ID = '$CAT_ID'";

    if(mysqli_query($con,$Sql_Query)){
        $MSG = 'Category Updated Successfully';
        $returnArray['data'] = $MSG;
        echo json_encode($returnArray);
    }else{
        print_r($CAT_NAME);
        print_r($CAT_ID);

        $returnArray['error'] = 'Oops.. Something Went Wrong!!';

        echo json_encode($returnArray);
    }
?>
