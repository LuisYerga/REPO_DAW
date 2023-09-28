<?php

/*Muestra dentro de una tabla HTML la tabla de multiplicar del número que reciba como parámetro. 
Utiliza <thead> con sus respectivos <th> y <tbody> para dibujar la tabla.*/

$a=4;

echo "<table border=1>"; //Pintamos la tabla con la estructura html
echo "<thead>";
echo "<tr>";
echo "<th> a </th>";
echo "<th> * </th>";
echo "<th> b </th>";
echo "<th> = </th>";
echo "<th> a*b </th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
for ($b = 0 ;$b<=10; $b++) { //Incrementamos el valor del multiplicador ($b) con cada iteración del for hasta que valga 10
    echo "<tr>";
    echo "<td> $a </td>";
    echo "<td> * </td>";
    echo "<td> $b </td>";
    echo "<td> = </td>";
    $result=$a*$b;
    echo "<td> $result </td>";
    echo "</tr>";
}
echo "</tbody>";
echo "</table>";