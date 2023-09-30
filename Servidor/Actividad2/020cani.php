<?php

/*EsCrIbE uNa FuNcIóN qUe TrAnSfOrMe UnA cAdEnA eN cAnI.*/

function conversion($frase){  

$cadenaCani= ["a"=>"4", "e"=>"3", "i"=>1, "o"=>"0", "s"=>"5", "t"=>"7"];  //Creamos un array asociativo donde las letras estan asociadas a un número por el que seran sustituidas

$frase=strtolower($frase); // Pasamos la frase a minúscula para que todas la letras sean comparables con el array.
$frase=strtr($frase,$cadenaCani); //La función strtr detecta las coincidencias en la cadena original y las sustituye.
return $frase;
};

$fraseOriginal="Hola, esto es un simple texto de pureba";

echo "La frase original $fraseOriginal ahora es: <br/>" .($fraseCambiada=conversion($fraseOriginal)); //Mostramos el resultado al mismo tiempo que llamamos a la función