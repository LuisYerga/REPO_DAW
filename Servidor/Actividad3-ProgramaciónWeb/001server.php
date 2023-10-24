<?php

/*igual que el ejemplo visto en los apuntes, muestra los valores de $_SERVER al ejecutar un script en tu ordenador.
Prueba a pasarle parámetros por GET (y a no pasarle ninguno).
Prepara un formulario (001post.html) que haga un envío por POST y compruébalo de nuevo.
Crea una página (001enlace.html) que tenga un enlace a 001server.php y comprueba el valor de HTTP_REFERER.*/

echo $_SERVER["HTTP_REFERER"] ."<br>";

