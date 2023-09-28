<?php
/*
4.004edad.php: Sabiendo la edad de una persona, mostrar la edad que tendrá dentro de 10 años y hace 10 años. Además, muestra qué año será en cada uno
de los casos. Finalmente, muestra el año de jubilación suponiendo que trabajarás hasta los 67 años. 
En este caso, no hace falta que previamente crees un formulario, puedes probar el ejercicio vía URL: 004edad.php?edad=33. 
Tip: $anyoActual = date("Y");
*/
$edadActual=33;

$jubilacion= 67-$edadActual;

echo "<p>Dentro de diez años tendra "$edadActual+10 "</p>";

?>