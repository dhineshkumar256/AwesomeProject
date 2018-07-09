<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $REST_ID = $obj['REST_ID'];

    $fetchItem = "SELECT * FROM item";

    $fetchItem = "SELECT * FROM categoery c JOIN item i WHERE c.REST_ID ='$REST_ID' AND c.CAT_ID = i.CAT_ID";

    $check = mysqli_query($con,$fetchItem);
    $returnArray = array();

    if(isset($check)){
        while ($row = mysqli_fetch_assoc($check)) {
            $returnArray[] = $row;
        }
		echo json_encode($returnArray);
    }else{
        $NotExistMSG = 'No Items found !!';
        $returnArray['error'] = $NotExistMSG;
        echo json_encode($returnArray);
    }

    mysqli_close($con);
?>
