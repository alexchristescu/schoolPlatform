<?php


class APPMODEL{

    public function JsonT($value){
		if ($value == '' || count($value) == 0 || $value == null) {
			return json_encode(json_encode([code => 'value_false']));
		}
		else{
			return json_encode(json_encode($value));
		}
	}
    public function sqlTest(){
		global $conn;
		
		$query="SELECT * FROM users ";
		
		$result = $conn->query($query);
		
	if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem);
 
 
 }
 
} 
		return  $json;
		
		$conn->close();
		
	}
    
public function logIn($user, $pass){
        
        global $conn;
        
       
		
	
	$query = 'SELECT id, rangid  FROM users WHERE user = "' .$user. '" AND pass = "' .$pass.'"';
	

	file_put_contents("param.txt",$query );
	$result = $conn->query($query);

	if ($result->num_rows > 0) {
		$rows = [];
		$res = $result->fetch_assoc();	
		$rows = $res;
		
		
	}
	return json_encode($rows);
	
	

	$conn->close();
    


}

public function studentInfo($id){
        
	global $conn;
	
   
	

$query = 'SELECT student.id,
		ani.id as IdAn,
        student.Nume,
        student.Prenume,
        student.Email
FROM student join ani on student.IdAn = ani.ID WHERE  userid = "' .$id. '"';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

if ($result->num_rows > 0) {
	$rows = [];
	$res = $result->fetch_assoc();	
	$rows = $res;
	
	
}
return json_encode($rows);



$conn->close();



}

public function materii($id){
        
	global $conn;
	
   
	

$query = 'SELECT materii.id, materii.denumire,materii.descriere FROM materii JOIN ani on materii.IdAn=ani.ID  WHERE IdAn =  "' .$id. '"';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

		while ( $row = mysqli_fetch_object($result))
		{
			$res[]=$row;

		}

		return  json_encode($res);
		
		$conn->close();



}

 public function listaStudProiect($idProiect){

	global $conn;

	$query = 'SELECT * FROM studentiproiect
	JOIN student ON studentiproiect.IdStudent = student.ID
	left join fisiereproiect on    fisiereproiect.IdStud = studentiproiect.IdStudent
	WHERE studentiproiect.IdProiect = "'.$idProiect.'" AND fisiereproiect.IdProiect ="'.$idProiect.'"';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

		while ( $row = mysqli_fetch_object($result))
		{
			$res[]=$row;

		}

		return  json_encode($res);
		
		$conn->close();


 }

public function materiiProf($id){
        
	global $conn;
	
   
	

$query = 'SELECT * FROM profesormaterii JOIN materii on materii.id = profesormaterii.IdMaterie  WHERE profesormaterii.IdProfesor =  "' .$id. '"';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

		while ( $row = mysqli_fetch_object($result))
		{
			$res[]=$row;

		}

		return  json_encode($res);
		
		$conn->close();



}

public function proiecte($idStudent){
        
	global $conn;
	
   
	

$query = 'SELECT Denumire from proiect WHERE id=  "' .$idStudent. '"';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

		while ( $row = mysqli_fetch_object($result))
		{
			$res[]=$row;

		}

		return  json_encode($res);
		
		$conn->close();



}



public function newpass($id,$newpass){
        
	global $conn;
	
   
	

$query = 'UPDATE users SET pass = "' .$newpass. '"  WHERE id = "' .$id. '"';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

if ($conn->affected_rows > 0) {
	return 1;
	
	
} else{
return 0;
}



$conn->close();



}
public function uploadDateProiect($id,$idStud, $comentarii, $denumireFisier){
        
	global $conn;
	
   
	

$query = "INSERT INTO fisiereproiect ( DenumireFisier,Comentarii, DataAdaugare, IdProiect, IdStud)
		   VALUES('" .$denumireFisier. "','".$comentarii."',NOW(), '" .$id. "','".$idStud."')" ;


file_put_contents("param.txt",$query );
$result = $conn->query($query);

if ($conn->affected_rows > 0) {
	return 1;
	
	
} else{
return 0;
}



$conn->close();



}


public function createProject($idMaterie,$denumire, $idProfesor){

	global $conn;

	$query = "INSERT INTO proiect (Denumire, IdMaterie, DataAdaugare, IdProfesor)
			   VALUES('" .$denumire. "','".$idMaterie."',NOW(), '" .$idProfesor. "')";

file_put_contents("param.txt",$query);
$result = $conn->query($query);

if ($conn->affected_rows > 0) {
	return 1;
	
	
} else{
return 0;
}



$conn->close();

		   
}

public function proiectStud($idProiect, $idStudent){

	global $conn;

	$query = "INSERT INTO studentiproiect (IdProiect, IdStudent)
			   VALUES('".$idProiect."','".$idStudent."')";



file_put_contents("param.txt",$query);
$result = $conn->query($query);

if ($conn->affected_rows > 0) {
	return 1;
	
	
} else{
return 0;
}



$conn->close();

}

public function idProiectProf($idProiect){

	global $conn;


	$query= 'SELECT id,Denumire from proiect WHERE IdMaterie= "'.$idProiect.'" ';

	 file_put_contents("param.txt",$query);
		$result = $conn->query($query);

		while ( $row = mysqli_fetch_object($result))
		{
			$res[]=$row;

		}

		return  json_encode($res);
		
		$conn->close();
}


public function idProiect($idProiect, $idStud){

	global $conn;


	$query= 'SELECT proiect.ID,proiect.Denumire, studentiproiect.Nota, studentiproiect.ComentariuProf,studentiproiect.IdStudent FROM proiect LEFT Join studentiproiect ON proiect.ID =studentiproiect.IdProiect WHERE proiect.IdMaterie = "'.$idProiect.'" AND (studentiproiect.IdStudent = "'.$idStud.'" OR studentiproiect.IdStudent IS NUll)';

	 file_put_contents("param.txt",$query);
		$result = $conn->query($query);

		while ( $row = mysqli_fetch_object($result))
		{
			$res[]=$row;

		}

		return  json_encode($res);
		
		$conn->close();
}


public function profInfo($id){
        
	global $conn;
	
   
	

$query = 'SELECT * FROM profesor join profesormaterii on profesor.Id = profesormaterii.IdProfesor WHERE  profesor.userid = "' .$id. '"';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

if ($result->num_rows > 0) {
	$rows = [];
	$res = $result->fetch_assoc();	
	$rows = $res;
	
	
}
return json_encode($rows);



$conn->close();



}

public function notaProf($idProiect,$idStud,$nota,$comentariuProf,$stareProiect){


	global $conn;


	$query = 'UPDATE studentiproiect SET Nota="'.$nota.'", ComentariuProf="'.$comentariuProf.'", StareProiect="'.$stareProiect.'" WHERE IdProiect = "'.$idProiect.'" AND idStudent = "'.$idStud.'" ';


file_put_contents("param.txt",$query );
$result = $conn->query($query);

if ($conn->affected_rows > 0) {
	return 1;
	
	
} else{
return 0;
}






$conn->close();

}



}

?>