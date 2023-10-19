"use strict";

/*Por qué 6.35.toFixed(1) == 6.3? Según la documentación Math.round y toFixed redondean al número más cercano:
0..4 hacia abajo mientras 5..9 hacia arriba. Por ejemplo:  alert( 1.35.toFixed(1) ); // 1.4
En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?
alert( 6.35.toFixed(1) ); // 6.3
¿Cómo redondear 6.35 de manera correcta?*/

alert( 6.35.toFixed(1) );

/*Nos volvemos a encontra con una imprecisión de JavaScript debido a la forma en la que se tratan los datos. 
La manera de solucionar casos como estos es convertir el número en uno más cercno a ser un entero para que no se den pérdida de datos.*/

alert((Math.round(6.35 * 10))/10);

/*De esta forma convertimos el numero a 63.5 y lo redondeamos a 64. Luego se divide entre 10 y se obtiene el 6.4*/