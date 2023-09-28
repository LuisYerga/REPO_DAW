<?php
/*
4.004edad.php: Sabiendo la edad de una persona, mostrar la edad que tendrá dentro de 10 años y hace 10 años. Además, muestra qué año será en cada uno
de los casos. Finalmente, muestra el año de jubilación suponiendo que trabajarás hasta los 67 años. 
En este caso, no hace falta que previamente crees un formulario, puedes probar el ejercicio vía URL: 004edad.php?edad=33. 
Tip: $anyoActual = date("Y");
*/
$edadActual= $_GET["edadActual"]; //Cogemos la edad a traves del valor que introducimos en la URL

$jubilacion= 67-$edadActual; //Averiguamos cuanto nos falta para alcanzar la edad de jubilación

$anyoActual = date("Y");//Obtenemos el año actual

echo "<p>En ".($anyoActual +10)." tendra " .($edadActual +10). " años</p>"; //Realizamos los echos para saber que edad tendremos en cada año

echo "<p>En ".($anyoActual-10). " tenía " .($edadActual -10). " años</p>";

echo"<p>Te jubilaras en " .($anyoActual + $jubilacion). " con ".($edadActual + $jubilacion)." años</p>";
?>