<?php 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
		
	require_once("dbConfig.php");
	require_once("model.php");

	$app = new APPMODEL; 
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	
	

	
	switch ($obj["req"]) {
		


        

		case "test":
            
            
            file_put_contents("sqlTest.txt",'a intrat in functie');
			$result = $app->sqlTest();
			file_put_contents("sqlTest.txt",$result);
			echo $result;
		break;

		
		case "login":


            
			$result = $app->login($obj["user"],$obj["pass"]);
			file_put_contents("login.txt",$result);
			echo $result;
			
			
		break;

		case "studentInfo":


            
			$result = $app->studentInfo($obj["id"]);
			file_put_contents("studentinfo.txt",$result);
			echo $result;
			
			
		break;

		case "materii":


            
			$result = $app->materii($obj["id"]);
			file_put_contents("materii.txt",$result);
			echo $result;
			
			
		break;

		case "materiiProf":


            
			$result = $app->materiiProf($obj["id"]);
			file_put_contents("materii.txt",$result);
			echo $result;
			
			
		break;

		case "proiecte":


            
			$result = $app->proiecte($obj["idStudent"]);
			file_put_contents("materii.txt",$result);
			echo $result;
			
			
		break;

		case "idProiect":
            
			$result = $app->idProiect($obj["idProiect"],$obj["idStud"]);
			file_put_contents("idproiecte.txt",$result);
			echo $result;
		break;

		case "idProiectProf":
            
			$result = $app->idProiectProf($obj["idProiect"]);
			file_put_contents("idproiecte.txt",$result);
			echo $result;
		break;


		case "newpass":

			$result = $app->newpass($obj["id"],$obj["newpass"]);
			file_put_contents("newpass.txt",$result);
			echo $result;
			
			
		break;
			

		case "uploadDateProiect":
			
			$result = $app->uploadDateProiect($obj["id"],$obj["idStud"], $obj["comentarii"], $obj["denumireFisier"]);
			file_put_contents("uploadDateProiect.txt",$result);
			echo $result;

		break;

		case "listaStudProiect":

			$result = $app->listaStudProiect($obj["idProiect"]);
			file_put_contents("listaStudProiect", $result);
			echo $result;

		break;	

		case "proiectStud":

			$result = $app->proiectStud($obj["idProiect"], $obj["idStudent"]);
			file_put_contents("proiectStud.txt",$result);
			echo $result;


		break;
		case "createProject":

			$result = $app->createProject($obj["idMaterie"],$obj["denumire"],$obj["idProfesor"]);
			file_put_contents("createProject.txt",$result);
			echo $result;

		break;
			
		case "profInfo":


            
			$result = $app->profInfo($obj["id"]);
			file_put_contents("profInfo.txt",$result);
			echo $result;
			
			
		break;
		
		case "notaProf":

			$result = $app->notaProf($obj["idProiect"],$obj["idStud"],$obj["nota"],$obj["comentariuProf"],$obj["stareProiect"]);
			file_put_contents("notaProf.txt",$result);
			echo $result;
			
			
		break;
		

		



		
		case "other":
			
			echo "i equals 2";
		
		break;
	
	}

?>