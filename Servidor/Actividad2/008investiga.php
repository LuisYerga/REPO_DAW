<?php

/*Investiga para qué sirve la instrucción match(), 
disponible desde PHP8 (https://www.php.net/manual/es/control-structures.match.php). 
Explica con un par de lineas su propósito y mediante código demuestra su uso. */

/*Match nos es útil para buscar la expresión que es extrictamente igual a nuestra condición. A cada opción del match le asignaremos un valor 
que devolvera y quedara guardado. */

$numero = 3;

$mensaje = match ($numero) {
     1 => "La variable es 1",
     2 => "La variable es 2",
     3 => "La variable es 3",
     default => "No coincide con los parametros",
};

echo $mensaje;