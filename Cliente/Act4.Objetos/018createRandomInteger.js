"use strict";

/*Crea una función randomInteger(min, max) que genere un número entero aleatorio entre min y max incluyendo ambos,
min y max, como valores posibles. Todo número del intervalo min..max debe aparecer con la misma probabilidad. Ejemplos de funcionamiento:
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(valor1, valor2){
    return (Math.random() * (valor2 - valor1) + valor1).toFixed(0); //Repetimos la estructura del ejercicio anterior indicando ahora que no queremos decimales. Se nos redondea entonces al numero entero
}

alert(randomInteger(1,3));