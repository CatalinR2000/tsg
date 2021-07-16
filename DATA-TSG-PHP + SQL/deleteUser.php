<?php 
	include 'conn.php';

	$_POST = json_decode(file_get_contents("php://input"), true);

	$id = $_GET['id'];


	$result = "";
	$sql = $conn->query("UPDATE users SET deleted='1' WHERE id='id'");

	if(mysqli_query($conn, $sql)){
		$request = "Ce bine....";
	}
	else{
		$result = "Ceva nu a mers, UPDATE!". mysqli_error($conn);
	}

	echo json_decode($result);
	mysqli_close($conn);

?>
