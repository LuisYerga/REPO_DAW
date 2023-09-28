<?php

/*Basándote en el ejercicio anterior, rellena la tabla de manera que solo los bordes tengan contenido, 
quedándose el resto de las celdas vacías.*/

$fila=$_GET["filas"];  //Recbimos los valores del formulario
$columnas=$_GET["columnas"];

echo "<table border=1>";           //Pintamos la tabla a través de un doble bucle for 
for($a=1 ; $a<=$columnas; $a++){       //Iteramos por las columnas
    echo "<tr>";
    for ($b=1 ; $b<=$fila; $b++){  //Iteramos por las filas
        echo $a == 1||$a==$columnas ? "<td> $a , $b</td>" : ($b==1 || $b==$fila ? "<td> $a , $b</td>" : ("<td> </td>")); //Con el operador ternario comprobamos si la posición que 
    }                                                                                                                    //queremos rellenar es un borde o no
    echo "</tr>";
}
echo "</table>";