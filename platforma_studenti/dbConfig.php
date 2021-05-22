<?php

	//Database Information
	$HostName = "localhost";
	$DatabaseName = "platforma_studenti";
	$HostUser = "root";
	$HostPass = "";
	
//	GLOBAL $conn;
	/* Create a new mysqli object with database connection parameters */
	$conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);


	//Date and time information
	date_default_timezone_set("Europe/Bucharest");
//
//    if ($conn->connect_error) {
//  die("Connection failed: " . $conn->connect_error);
       
//        echo $conn->connect_error;
// }    else 
       
       
//        echo 'ok';


?>