<?php

/*Escribe un programa que almacene en variables tu nombre, primer apellido, segundo apellido, 
email, año en el que naciste y móvil. Luego muéstralos por pantalla dentro de una tabla*/

$nombre = "Luis";
$primerApellido = "Yerga";
$segundoApellido= "Mayor";
$email= "lyergamayor1@gmail.com";
$anoNacimiento = 2004;
$numeroTLF= 123456789;

echo "<table border=1>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>1ºApellido</th>";
echo "<th>2ºApellido</th>";
echo "<th>Año Nacimiento</th>";
echo "<th>TLF</th>";
echo "</tr>";
echo "<tr>";
echo "<td> $nombre </td>";
echo "<td> $primerApellido </td>";
echo "<td> $segundoApellido </td>";
echo "<td> $anoNacimiento</td>";
echo "<td> $numeroTLF </td>";
echo "</tr>";
echo "</table>";
?>
