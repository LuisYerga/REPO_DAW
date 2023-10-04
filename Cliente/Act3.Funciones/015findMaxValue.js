"use strict";

/*Crea una función llamada findMaxValue que tome un array de números y utilice el método reduce para 
devolver el valor más grande. Utilice las funciones flecha y no haga uso de if else. */

let findMaxValue = (numeros) => numeros.reduce((numGrande, valorActual)=> valorActual > numGrande ? valorActual : numGrande);
//Con el metodo reduce comparamos si el valor actual es mayor que el guardado en acumulador(numGrande). Si lo es lo devolvemos y este sustituye al anterior, sino simplemente devolvemos otra vez el numGrande para que continue en el acumulador

let numeros = [1,2,3,8,4,5,6,7];
let resultado = findMaxValue(numeros);
console.log(resultado);