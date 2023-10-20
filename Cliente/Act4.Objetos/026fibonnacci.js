"use strict";

/*Crear un array que contenga los 20 primeros números de Fibonacci.*/

let fibonacci =[0,1]; //Inicializamos los dos primeros números

for(let i=1;fibonacci.length<20;i++){ //Iteramos hasta que el array tenga longitud de 20
    fibonacci.push(fibonacci[i]+fibonacci[i-1]); //Subimos el resultado del valor del numero en nuestra posición con el de la anterior
}

console.log(fibonacci);