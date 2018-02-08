<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    $page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] :1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 16;
    $sql = "select * from goods";
    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQL_ASSOC);
    $red = array(
        'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
        'total'=>count($row),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );



    echo json_encode($red,JSON_UNESCAPED_UNICODE);
    // fclose($myfile);                                            <a href=""><img src=${item.img.split(",")[0]}></a>

?>