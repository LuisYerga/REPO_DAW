"use strict";

/*Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué?*/

alert( 9999999999999999 );

/*Se esta redondeando el número. Esto se debe a la manera en la que se tratan los datos de numeros grandes. 
En js se implementa un formato en coma flotante de doble precisión de 64 Bits IEEE 754. Para mostrar con precisión los numeros con grandes 
cantidades de dígitos se utilizan bibliotecas como BigInt*/

