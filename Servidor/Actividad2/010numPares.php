<?php

//A partir del anterior, refactorizar para que funcione con inicio y fin.
 
$listaOrdenada=[];   
$inicio= $_GET["inicio"];  //Recibimos del usuario el número por el que inicia y finaliza el rango de números primos que buscamos
$final= $_GET["fin"];

for ($i=$inicio;$i<=$final; $i++){              // Establecemos $i para que empiece en el valor de la variable inicio y termine en final, incrementándose en cada bucle
    $i % 2 === 0 ? $listaOrdenada[]=$i : false;  //Si el resto de $i entre 2 es igual a 0 el valor sera un número primo y será guardado en el array
}

shuffle($listaOrdenada); //Desordenamos las lista 

foreach ($listaOrdenada as $lista){  //Y mostramos todos los elementos ahora en orden aleatorio
    echo $lista . "<br/>";
}