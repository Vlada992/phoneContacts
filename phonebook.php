<?php

$namefirst=$_POST['namefirst'];
$namelast=$_POST['namelast'];
$namenumber=$_POST['namenumber'];
$con=mysqli_connect("localhost","root","");
if(!$con)
{
die('Could not connect to Database!');
}
mysqli_select_db($con,"bookphone");
$query="INSERT INTO phonedetails( first_name, last_name, telephone_number)VALUES('$namefirst', '$namelast', '$namenumber')";

if(!mysqli_query($con,$query))
{
 die('Error, something is not good.' .mysqli_error);
}else
{
 echo "Data pushed";
}

header("Location: ./connect1.php"); die('Something just went wrong...');

?>



