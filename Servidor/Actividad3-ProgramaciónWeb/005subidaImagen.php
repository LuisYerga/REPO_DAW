<?php

/*Modifica el ejercicio anterior para que únicamente permita subir imágenes (comprueba la propiedad type del archivo subido). 
Si el usuario selecciona otro tipo de archivos, se le debe informar del error y permitir que suba un nuevo archivo.
En el caso de subir el tipo correcto, visualizar la imagen con el tamaño de anchura y altura recibido como parámetro.*/

if(isset($_FILES["archivo"])){
    $fichero= $_FILES["archivo"];
}
if(isset($_POST["altura"])){
    $altura= $_POST["altura"];
}
if(isset($_POST["anchura"])){
    $anchura= $_POST["anchura"];
}

