"use strict";

/*La función incorporada Math.random() crea un valor aleatorio entre 0 y 1 (no incluyendo 1). Escribe una función random(min, max)
para generar un número de punto flotante entre min y max (no incluyendo max). Ejemplos de su funcionamiento:
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525*/


function random(valor1,valor2){
    return (Math.random() * (valor2 - valor1) + valor1).toFixed(10); //Devolvemos es resultado del Math.random (Estructura: (mayor_valor - menor_valor) + menor_valor). Con el fixed redondeamos a 10 decimales como en el ejemplo
}

alert (random(2,6)); //Introducimos los valores que queremos