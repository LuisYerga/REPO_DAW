<?php

/*Crea un programa que resuelva una ecuación de 2º grado del tipo ax² + bx + c = 0. Ten en cuenta 
que puede tener 2, 1 o no tener solución dependiendo del valor del discriminante b²-4ac.Tip: Para 
calcular la raíz cuadrada deberás utilizar la función sqrt() */

$a=$_GET["a"]; //Obtenemos los valores de la ecuación
$b=$_GET["b"];
$c=$_GET["c"];

echo $resultado= (-$b + sqrt(($b**2)-4*$a*$c))/(2*$a); //Planteamos las dos posibilidades de la ecuación de segundo grado
echo "<br />";
echo $resultado= (-$b - sqrt(($b**2)-4*$a*$c))/(2*$a);