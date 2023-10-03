<?php

/*Es el mismo ejercicio anterior, pero separando la lógica. 
En el html crearemos el formulario para introducir los datos,
y luego recogemos los datos y generamos la tabla en el segundo archivo. */

$nombre = $_GET["nombre"];  //Recibimos del html los datos que introduce el usuario y los guardamos en una variable
$primerApellido =$_GET["1Apell"];
$segundoApellido= $_GET["2Apell"];
$email= $_GET["email"];
$anoNacimiento = $_GET["año"];
$numeroTLF= $_GET["movil"];

echo "<table border=1>";  //A través de echo's damos forma a la tabla con la estructura html
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>1ºApellido</th>";
echo "<th>2ºApellido</th>";
echo "<th>Año Nacimiento</th>";
echo "<th>TLF</th>";
echo "</tr>";
echo "<tr>";
echo "<td> $nombre </td>"; // Mostramos los datos en la variables
echo "<td> $primerApellido </td>";
echo "<td> $segundoApellido </td>";
echo "<td> $anoNacimiento</td>";
echo "<td> $numeroTLF </td>";
echo "</tr>";
echo "</table>";
