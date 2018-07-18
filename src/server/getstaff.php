<?php
    include './DBConfig.php';

    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $REST_ID = $obj['REST_ID'];

    $fetchCat = "SELECT * FROM staff_details";

    $check = mysqli_query($con,$fetchCat);
    $returnArray = array();

    if(isset($check)){
        while ($row = mysqli_fetch_assoc($check)) {
            $returnArray[] = $row;
        }
		echo json_encode($returnArray);
    }else{
        $NotExistMSG = 'No Staff details found !!';
        $returnArray['error'] = $NotExistMSG;
        echo json_encode($returnArray);
    }

    mysqli_close($con);
?>
