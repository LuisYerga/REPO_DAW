<?php

/*Rellena un array de 100 elementos de manera aleatoria con valores M o F (por ejemplo ["M", "M", "F", "M", ...]). Una vez 
completado, vuelve a recorrerlo y calcula cuantos elementos hay de cada uno de los valores almacenando el resultado en un array
 asociativo ['M' => 44, 'F' => 66] (no utilices variables para contar las M o las F). Finalmente, muestra el resultado por pantalla.*/

$listaGrande=[];  //Creamos un array vacío
$opciones=["M", "F"]; //Un array con ambas opciones de letras
$contar= ["M" => 0, "F" => 0]; //Y un array asociativo para contar las apariciones de cada letra

for($a=0;$a<=99;$a++){  //Llenamos el array con las opciones seleccionadas aleatoriamente
    $listaGrande[$a]= $opciones[random_int(0,1)];
}

foreach ($listaGrande as $lista){  //Usamos el foreach para recorrer cada posición del array y sumar las apariciones en el asociativo
    $contar[$lista]++;
}

echo "Hay " .$contar["M"] . " emes y " .$contar["F"] . " efes";