<?php

/*Investiga las siguientes funciones de cadena (explica para qué sirven mediante comentarios, y programa un pequeño ejemplo de cada una de ellas):
ucwords, strrev, str_repeat y md5.*/


//Ucwords sirve para convertir en mayúscula el primer caracter de cada palabra en una cadena

$cadena="hola que tal olga";

echo "La frase $cadena se convierte en: " . (ucwords($cadena)) ."<br/>";

//Strrev coge una cadena y la devuelve de forma inversa

echo "La frase $cadena se convierte en: " . (strrev($cadena)) ."<br/>";

//str_repeat nos servirá para devolver un string el número de veces que queramos

echo "La frase $cadena se convierte en: " . (str_repeat($cadena, 4)). "<br/>";

//md5 calcula el hash de un string 

echo "La frase $cadena se convierte en: " . (md5($cadena)) ."<br/>";
