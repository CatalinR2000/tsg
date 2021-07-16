<?php 
	include 'conn.php';

	$_POST = json_decode(file_get_contents("php://input"), true);

	$fName = addcslashes(htmlentities($_POST['fName']),"");
	$lName = addcslashes(htmlentities($_POST['lName']),"");
	$phoneNumber = addcslashes(htmlentities($_POST['phoneNumber']),"");
	$email = addcslashes(htmlentities($_POST['email']),"");
	$bDay = addcslashes(htmlentities($_POST['bDay']),"");
	$numberRoom = addcslashes(htmlentities($_POST['numberRoom']),"");
	$deleted = 0;

	$sql = false;

	if($_POST === null){
		$result = "";
	}
	else{
		$sql = $conn->query("INSERT INTO users VALUES ('$fName', '$lName', '$phoneNumber', '$email', '$bDay', '$numberRoom', '$deleted')");
	}
	
	if($sql === true){
		$result = "Ceva bun s-a intamplat!";
	}
	else{
		$result = "Eroare!! Ceva nu e bine...". $sql. "<br />". $conn->error;
	}

	echo json_encode($result);
	$conn->close();
/*
Nota practica:
	- prezente+ activitate +1p;
	- prezenta fara actifitate +0.75p;
	- altefel 0p.
Tema:
	Sa se realizeze:
		- tabelele oras, strazi, numar(cred eu);
		- sa se referentieze la tabelele profesori si studenti;
Caiet de practica:
	- mijloc septembrie.
*/
?>


