"use strict";

/*Crea una función llamada reduceArray que tome un array de números y utilice el método reduce 
para devolver la suma de todos los elementos. Utilice las funciones flecha. */

let reduceArray = (numeros) => numeros.reduce((suma, valorActual)=> suma + valorActual);  //Usamos el metodo reduce para guardar en el acumulador (suma), el resultado del valor actual en el que estamos con el ya acumulado. El primer acumulador si no es incializado será nuestro primer elemento del array

let numeros = [1,2,3,4,5,6,7];
let resultado = reduceArray(numeros);
console.log(resultado);