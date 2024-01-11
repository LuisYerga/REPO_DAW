<?php

//Escribe un programa que muestre los números pares del 0 al 50 (dentro de una lista desordenada).

$listaOrdenada=[]; //Creamos un array vacío

for ($i=0;$i<=50; $i+=2){ //Con el for guardamos todos los primos en el array. Al empezar en un número primo, avanzamos incrementando de dos en dos
    $listaOrdenada[]=$i;
}

shuffle($listaOrdenada); //Desordenamos las lista 

foreach ($listaOrdenada as $lista){ //Y mostramos todos los elementos ahora en orden aleatorio
    echo $lista . "<br/>";
}