<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $ITEM_ID = uniqid();
    $CAT_ID = $obj['CAT_ID'];
    $ITEM_NAME = $obj['ITEM_NAME'];
    $ITEM_PRICE = $obj['ITEM_PRICE'];
    $STATUS_ID = '1';

    $returnArray = array();

    $Sql_Query = "insert into item (ITEM_ID, CAT_ID, ITEM_NAME, ITEM_PRICE, STATUS_ID, CREATE_DATE, MODIFY_DATE)
                    values ('$ITEM_ID', '$CAT_ID', '$ITEM_NAME', '$ITEM_PRICE', '$STATUS_ID', now(), now())";

    if(mysqli_query($con,$Sql_Query)){
        $MSG = 'Item Created Successfully';
        $returnArray['data'] = $MSG;
        echo json_encode($returnArray);
    }else{
        $returnArray['error'] = 'Oops.. Something Went Wrong!!';
        echo json_encode($returnArray);
    }
?>
