<?php

/*Crea un formulario que permita subir un archivo al servidor. Además del fichero, debe pedir en el mismo 
formulario dos campos numéricos que soliciten la anchura y la altura. Comprueba que tanto el fichero como los datos llegan correctamente. */


if(isset($_FILES["archivo"])){
    $fichero= $_FILES["archivo"];
    if(isset($_POST["altura"])){
        $altura= $_POST["altura"];
        if(isset($_POST["anchura"])){
            $anchura= $_POST["anchura"];
            echo "Se recibe todo";
        }else{
            echo "Fallo en el parametro anchura";
        }
    }else{
        echo "Fallo en el parametro altura";
    }
}else{
    echo "Fallo en el archivo";
}



