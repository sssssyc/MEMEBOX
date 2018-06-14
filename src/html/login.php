<?php
	session_start();
	
    $conn = new mysqli("localhost:3306", "root", "", "aaa");
    
	$username = $_GET["username"];
	$password = $_GET["password"];

	$sql = "select id, username from login where username='$username' and password='$password'";
	$result = $conn->query($sql);
	$row=$result->fetch_assoc();
	if( $row){
		$m = "登录成功";
		$url = "index.html";
		$_SESSION["userid"] = $row["id"];
		$_SESSION["username"] = $row["username"];
	}else{
	   $m =  "登录失败,重新登录";
	   $url = "register.html";
	}
	echo  '{"m" : "'.$m.'" , "url" : "'.$url.'"}';
?>



