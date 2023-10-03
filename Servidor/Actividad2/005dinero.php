<?php

/*
A partir de una cantidad de dinero, mostrar su descomposición en billetes (500, 200, 100, 50, 20, 10, 5) y monedas (2, 1), 
para que el número de elementos sea mínimo. No se utilizar ninguna instrucción condicional. Por ejemplo, al introducir 138 debe mostrar:
1 billete de 100
0 billete de 50
1 billete de 20
1 billete de 10
1 billete de 5
1 moneda de 2
2 monedas de 1
Tip: Puedes forzar a realizar la división entera mediante la función intdiv($dividendo, $divisor) o pasar un número flotante a entero puedes usar 
la función intval().
*/

$saldo = $_GET["saldo"]; //Obtenemos el saldo

$billetes=[500, 200, 100, 50, 20, 10, 5, 2, 1]; //Declaramos los distintos billetes y monedas en los que podemos descomponer

foreach ($billetes as $valor){ // Iteramos por los distintos billetes
    $saldo>=$valor ? $saldo=operación($saldo, $valor) : false; //Si nuestro saldo es divisible por el billete llamamos a la función operación
}

function operación($a, $b){ //Recibimos el saldo y el billete para realizar la división y guardamos el resultado
    $resultado = intdiv($a,$b); //Nos quedamos con el cociente de la división
    echo "$resultado "; //Imprimimos cuantos billetes o monedas sacamos de cada tipo
    echo $b > 5 ? "billete" : "moneda"; //Si b es mayor que 5 es porque este es un tipo de billete
    echo $resultado > 1 ? "s de " .($b) : " de " .($b);
    echo "<br />";
    return $a= $a %= $b; //Devolvemos el resto de la operación al foreach para que se guarde en la variable saldo y continue descomponiendo
}
