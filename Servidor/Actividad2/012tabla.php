<?php

/*A partir de un número de filas y columnas, crear una tabla con ese tamaño. 
Las celdas deben estar rellenadas con los valores de las coordenadas de cada celda.*/

$fila=$_GET["filas"];  //Recbimos los valores del formulario
$columnas=$_GET["columnas"];

echo "<table border=1>";           //Pintamos la tabla a través de un doble bucle for 
for($a=1 ; $a<=$columnas; $a++){       //Iteramos por las columnas
    echo "<tr>";
    for ($b=1 ; $b<=$fila; $b++){  //Iteramos por las filas
        echo "<td> $a , $b</td>"; //Mostramos la cordenada de la celda
    }
    echo "</tr>";
}
echo "</table>";