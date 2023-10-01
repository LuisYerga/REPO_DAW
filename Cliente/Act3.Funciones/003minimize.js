"use strict";

/*Función min(a, b)

Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

Por ejemplo:

min(2, 5) == 2

min(3, -1) == -1

min(1, 1) == 1 */

let a=9; //Declaramos las variables
let b=3;

function min(a,b){ 
    return a>b ? a : b ;  //Con un ternario vemos cual número es mayor y lo devolvemos
};

alert (min(a,b));  //Mostramos lo que devuelva la función al mismo tiempo que la llamamos con los parametros anteriormente establecidos