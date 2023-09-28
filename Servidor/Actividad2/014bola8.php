<?php

/*A partir del anterior, crea un programa que muestre la pregunta recibida y genere una respuesta de manera aleatoria entre 
un conjunto de respuestas predefinidas, almacenadas en un array: Sí, no, quizás, claro que sí, por supuesto que no, no lo tengo claro, 
seguro, yo diría que sí, ni de coña, etc...
Este ejercicio se basa en el juego de la Bola 8 mágica.*/

$pregunta=$_GET["pregunta"];  //Recogemos la pregunta del usuario
$respuestas=["Sí", "No", "Puede", "Sigue soñando", "¿Tu te escuchas?", "Es muy posible", "Definitivamente no", "Que crees que soy?, Una bola mágica?, Ah espera sí"];  //Creamos un array con respuestas predeterminadas

echo $pregunta ."<br />";
$random= random_int(0, count($respuestas) - 1); //Sacamos un número al azar en el rango del tamaño del array
echo $respuestas[$random]; //Seleccionamos la respuesta en la posición que indique el resultado