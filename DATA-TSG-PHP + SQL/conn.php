<?php
	$conn = new mysqli("localhost", "root", "", "tsg");
	if($conn->connect_error){
		die("Nu ma pot conecta la baza de date!");
	}
?>