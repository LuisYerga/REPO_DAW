"use strict";

/*Crea una función llamada reduceArray que tome un array de números y utilice el método reduce 
para devolver la suma de todos los elementos. Utilice las funciones flecha. */

let reducir = (numeros) => numeros.reduce((suma, valorActual)=> suma + valorActual);

let numeros = [1,2,3,4,5,6,7];
let resultado = reducir(numeros);
console.log(resultado);