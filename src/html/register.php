<?php
	
    $conn = new mysqli("localhost:3306", "root", "", "aaa");
    
	$username = $_GET["username"];
	$password = $_GET["password"];
	
		$sql = "select count(*) as num from login where username='$username'";
		$result = $conn->query($sql);
		$row=$result->fetch_assoc();
		echo $row["num"];
	
	$sql = "insert into login (username, password) values ('$username', '$password')";
	$conn->query($sql);
	echo "注册成功";
?>