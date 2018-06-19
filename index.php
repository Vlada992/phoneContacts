<?php
	//connecting to DB.
	$link= mysqli_connect("localhost","root","");
	mysqli_select_db($link, 'bookphone');
	$sql = "SELECT * FROM  phonedetails";
	$records =mysqli_query($link,$sql);
	$sl2 = "SELECT  last_name FROM phonedetails";
	$records1 = mysqli_query($link, $sl2);
	$cnt = 1;
		//put all in arr.
		$result = mysqli_query($link, "SELECT * FROM phonedetails");
		$results5 = array();
				while($row = mysqli_fetch_assoc($result))
		{
		$results5[] = $row;
		}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Simple Phonebook</title>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="author" content="Vladan Petrović">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
		<link rel ="stylesheet" href ="https://cdn.jsdelivr.net/foundation-icons/3.0/foundation-icons.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		<link rel="stylesheet" href="style.css"  type="text/css">
	</head>
	<body>
		<h2 id='headerId1'> <i id='iBook1' class="fas fa-address-book"></i>&nbsp;&nbsp;Vladan's Simple Phonebook</h2>
		<div class='container mainDiv'>
			<form  name='phonebook1' action =phonebook1.php class='container formId' method='post'>
				&nbsp;First Name:<input placeholder='Hub'  type='text' name ='namefirst' class='inp1'><br>
				&nbsp;Last Name: <input placeholder='River'  type='text' name ='namelast' class='inp1'><br>
				&nbsp;Phone Number: <input placeholder='333 444 555'  type='text' name ='namenumber' class='inp1'>
				<button id='submitId1' name='submit1' value='Add Contact'>Add Contact &nbsp;<i class="fa fa-plus"></i></button>
				<span style='opacity:0'  id='addSymb'>&#10004;</span>
			</form>
			<div id='btnCont' class='container'>
				<button id='showAll1' value='Show All'>Show All &nbsp;<i class="fi-torsos-all"></i></button>
				<button id='deleteAll'  onclick="ajaxAndOpac()">Delete All  &nbsp;<i class="fa fa-trash"></i></button>
				<form id='formSearch' name='searchFor'>
					<input title='By name/surname/number' type='text' id='lastNameSr' name='takeSearched' placeholder='Search One...'>
					<button id='searchSub'>Search &nbsp;&nbsp;<i id='searchIcn' class="fa fa-search"></i></button>
					<div id='searchRes' style='opacity:0'></div>
				</form>
			</div>
			<table id='myTabId' style='opacity:0' width='300' border='1' cellpadding="30" cellspacing="50" class='stajlTable'>
				<tr class ='firstT'>
					<th class ='firstTh'>Id:</th>
					<th class ='firstTh'>First Name:</th>
					<th class ='firstTh'>Last Name:</th>
					<th class ='firstTh'>Phone Number:</th>
				</tr>
				<?php
				while($phonedetail=mysqli_fetch_assoc($records)){
					echo "<tr class ='firstT'>";
					
					echo "<td id='numbTd' class='firstTd'>$cnt</td>";
					echo "<td class='firstTd'>".$phonedetail['first_name']."</td>";
					echo "<td class='firstTd'>".$phonedetail['last_name']."</td>";
					echo "<td id='forNum' class='firstTd'>".$phonedetail['telephone_number']."</td>";
					echo "</tr>";
				$cnt++;
				}
				?>
			</table>
			<table id='myTabId1' style='opacity:0' width='300' border='1' cellpadding="5" cellspacing="5">
				<tr class ='secondT'>
					<th class='secondTh'>First Name:</th>
					<td class='secondTd'></td>
				</tr>
				<tr class ='secondT'>
					<th class='secondTh'>Last Name:</th>
					<td class='secondTd'></td>
				</tr>
				<tr class ='secondT'>
					<th class='secondTh'>Phone Number:</th>
					<td class='secondTd'></td>
				</tr>
			</table>
		</div>
		<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous">
		</script>
		<script type="text/javascript">
		var phpLastN = <?php echo json_encode($results5) ?>
		</script>
		<script src = 'main2.js'></script>
		<script src='main1.js'></script>
	</body>
</html>