<?php 
	include 'conn.php';

	$_POST = json_decode(file_get_contents("php://input"), true);

	$id = $_POST['id'];
	$fName = $_POST['fName'];
	$lName = $_POST['lName'];
	$phoneNumber= $_POST['phoneNumber'];
	$email = $_POST['email'];
	$bDay = $_POST['bDay'];
	$numberRoom  = $_POST['numberRoom '];

	$result = "";
	$sql = $conn->query("UPDATE users SET fName = 'fName', lName = 'lName', phoneNumber = 'phoneNumber', email = 'email', bDay = 'bDay', numberRoom = 'numberRoom'");

	if(mysqli_query($conn, $sql)){
		$request = "UPDATE";
	}
	else{
		$result = "Ceva nu a mers, UPDATE!". mysqli_error($conn);
	}

	echo json_decode($result);
	mysqli_close($conn);

?>