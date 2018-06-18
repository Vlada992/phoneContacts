<?php


if($_POST['action'] == 'call_this') {
	$link1 = mysqli_connect("localhost","root","");
	mysqli_select_db($link1, 'bookphone');
	mysqli_query($link1, "TRUNCATE TABLE phonedetails");
}
?>

