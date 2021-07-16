<?php 
	include 'conn.php';
	$sql = $conn->query("SELECT * FROM users");
	$request = array();

	while($data = $sql->fetch_assoc()){
		$result[] = $data;
	}
	echo json_encode($result);
	mysqli_close($conn);
?>