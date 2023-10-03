<?php

$productos=["Leche"=>5.48 , "Galletas"=>1.50 , "Batidos"=>2.46];
$cantLeche=$_GET["Leche"]; //Recibimos los valores y los guardamos en una variable
$cantGalletas=$_GET["Galletas"];
$cantBat=$_GET["Batidos"];

$clave=array_keys($productos);  //Guardamos las claves(nombre del producto)
shuffle($clave); //Desordenamos las claves
foreach ($clave as $nombre) { //Iteramos en el foreach por las distintas claves
    $precio= $productos[$nombre]; //Guardamos en precio 
    echo "Producto: $nombre, Precio: $precio<br>";
}