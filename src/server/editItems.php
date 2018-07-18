<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $ITEM_ID = $obj['ITEM_ID'];
    $ITEM_NAME = $obj['ITEM_NAME'];
    $ITEM_PRICE = $obj['ITEM_PRICE'];
    $CAT_ID = $obj['CAT_ID'];
    $STATUS_ID = '1';

    $returnArray = array();

    $Sql_Query = "UPDATE item SET CAT_ID = '$CAT_ID', ITEM_PRICE = '$ITEM_PRICE', ITEM_NAME = '$ITEM_NAME', STATUS_ID = '$STATUS_ID', MODIFY_DATE = now() WHERE ITEM_ID = '$ITEM_ID'";

    if(mysqli_query($con,$Sql_Query)){
        $MSG = 'Category Updated Successfully';
        $returnArray['data'] = $MSG;
        echo json_encode($returnArray);
    }else{
        $returnArray['error'] = 'Oops.. Something Went Wrong!!';

        echo json_encode($returnArray);
    }
?>
