<?php
	// 引入其他文件
	require('connect.php');//include 'connect.php'

	$id = isset($_GET['id']) ? $_GET['id'] : '';

	$sql = "select * from goods";

	$res = $conn->query($sql);
    // echo $res;

	$row = $res->fetch_all(MYSQL_ASSOC);


	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>