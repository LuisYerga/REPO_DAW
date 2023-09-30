<?php

/*Crea una función que, a partir de un tamaño, genere una contraseña aleatoria compuesta de letras y dígitos de manera aleatoria.*/

$tamaño=5;

function contraseña($tamaño){
    $caracteres=("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); //Creamos un string con todos los carácteres que queremos que puedan formar parte de la contraseña
    $contraseña="";  //Definimos contraseña antes del for
    for($i=0; $i<$tamaño; $i++){   //Iteramos en el for para conseguir el tamaño de carácteres marcado
        $caracterAleatorio=$caracteres[random_int(0,strlen($caracteres)-1)]; //Generamos un número aleatorio en el rango de tamaño de la cadena. El carácter que ocupe la posición del número elegido sera guardado
        $contraseña .= $caracterAleatorio;  //Concatenamos el carácter obtenido con el resto que esté formando la contraseña
    };
    return $contraseña;

};

echo "Tu contraseña será " .($contraseña=contraseña($tamaño)); //Llamos a la función e imprimimos el resultado