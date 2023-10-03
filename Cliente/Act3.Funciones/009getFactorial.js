"use strict";

/*Escribe una función que tome un número entero positivo como argumento y devuelva su factorial.
El factorial de un número es el producto de todos los enteros positivos desde 1 hasta ese número. */

let numEntero=8;

let resultado;

let operacion= (num) => {
    return num * operacion(num-1);
};

numEntero >0 ? resultado=operacion(numEntero) : false;
console.log(resultado);