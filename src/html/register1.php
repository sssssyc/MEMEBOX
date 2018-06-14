<?php
	    $conn = new mysqli("localhost:3306", "root", "", "aaa");
    
		$username = $_GET["username"];
		$sql = "select count(*) as num from login where username='$username'";
		$result = $conn->query($sql);
		$row=$result->fetch_assoc();
		echo $row["num"];
?>
