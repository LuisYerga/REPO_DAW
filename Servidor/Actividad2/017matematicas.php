<?php

/*Añade las siguientes funciones:
digitos(int $num): int ‚ devuelve la cantidad de dígitos de un número.
Para probar las funciones, haz uso tanto de paso de argumentos posicionales como argumentos con nombre.
*/

$num=22333;  

function digitos(int $num) : int{   
    return $longitud=strlen($num); //Devolvemos la longitud de la cadena
};

$contador=digitos($num); //Llamamos la función y guardamos su resultado

echo "El numero tiene $contador digitos <br />";

/*digitoN(int $num, int $pos): int ‚ devuelve el digito que ocupa, empezando por la izquierda, la posición $pos.*/

function digitosN(int $num, int $pos) : int {
    
}

/*quitaPorDetras(int $num, int $cant): int ‚ le quita por detrás (derecha) $cant digitos.*/

function quitaPorDetras(int $num , int $cant) : int { //Recibimos el número y la cantidad de dígitos a quitar
    $numStr=substr($num,0,-$cant); //Hacemos un substring que empiece en la posición 0 y reste el número de posiciones por la derecha establecido
    return (int)$numStr; //Lo devolvemos en formato int
}
$resta=3;

echo "Quitando $resta digitos por detras el numero es " . ($resultado=quitaPorDetras($num, $resta)) . "<br/>"; //Imprimimos el resultado que a su vez llama a la función

/*quitaPorDelante(int $num, int $cant): int ‚le quita por delante (izquierda) $cant digitos.*/

function quitaPorDelante(int $num , int $cant) : int {
    $numStr=substr($num,$cant); //Hacemos un substring que salte el número de posiciones por la izquierda que se haya establecido
    return (int)$numStr;
}

echo "Quitando $resta digitos por delante el numero es " . ($resultado=quitaPorDelante($num, $resta)); //Imprimimos el resultado que a su vez llama a la función
