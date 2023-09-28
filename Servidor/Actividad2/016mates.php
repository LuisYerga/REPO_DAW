<?php

//Genera un array aleatorio de 33 elementos con números comprendidos entre el 0 y 100 y calcula: El mayor, el menor y la media.

$listaElementos=[]; //Creamos el array vacío
$mayor=0;  //Ponemos valores que sean sustituidos de manera inmediata en el for
$menor=100;

for($a=0; $a<=32 ; $a++){ //Recorremos el array guardando en cada posición un número aleatorio
    $listaElementos[$a]=random_int(0,100);
}

foreach($listaElementos as $lista){ //Buscamos si el número actual es menor o mayor al guardado anteriormente
    $lista>= $mayor ? $mayor=$lista : ($lista<=$menor ? $menor=$lista : (false));
}

$suma= array_sum($listaElementos); //Calculamos la media
$media= $suma/count($listaElementos);

echo "El mayor de la lista es $mayor , el menor $menor y la media $media";