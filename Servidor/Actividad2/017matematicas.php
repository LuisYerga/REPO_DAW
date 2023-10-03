<?php

/*Añade las siguientes funciones:
digitos(int $num): int ‚ devuelve la cantidad de dígitos de un número.
Para probar las funciones, haz uso tanto de paso de argumentos posicionales como argumentos con nombre.
*/

$num=1234; //Numero que analizaremos  

function digitos(int $num) : int{   
    return strlen($num); //Devolvemos la longitud de la cadena
};

$contador=digitos($num); //Llamamos la función y guardamos su resultado


echo "El número tiene $contador dígitos <br />";

/*digitoN(int $num, int $pos): int ‚ devuelve el digito que ocupa, empezando por la izquierda, la posición $pos.*/

function digitosN(int $num, int $pos) : int { 
    $longitud=(string)$num;
    return $posicion=(int)$longitud[$pos];  //Obtenemos la posición en el string del número
}

$pos=0; //Posición que obtendremos

echo "En la posición $pos el digito es " . ($resultado=digitosN($num, $pos)) . "<br/>";

/*quitaPorDetras(int $num, int $cant): int ‚ le quita por detrás (derecha) $cant digitos.*/

function quitaPorDetras(int $num , int $cant) : int { //Recibimos el número y la cantidad de dígitos a quitar
    $numStr=substr($num,0,-$cant); //Hacemos un substring que empiece en la posición 0 y reste el número de posiciones por la derecha establecido
    return (int)$numStr; //Lo devolvemos en formato int
}
$resta=3; //Número de dígitos a quitar

echo "Quitando $resta digitos por detras el número es " . ($resultado=quitaPorDetras($num, $resta)) . "<br/>"; //Imprimimos el resultado que a su vez llama a la función

/*quitaPorDelante(int $num, int $cant): int ‚le quita por delante (izquierda) $cant digitos.*/

function quitaPorDelante(int $num , int $cant) : int {
    $numStr=substr($num,$cant); //Hacemos un substring que salte el número de posiciones por la izquierda que se haya establecido
    return (int)$numStr;
}

echo "Quitando $resta digitos por delante el número es " . ($resultado=quitaPorDelante($num, $resta)); //Imprimimos el resultado que a su vez llama a la función
