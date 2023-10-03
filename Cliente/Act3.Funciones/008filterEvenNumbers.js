"use strict";

/*Escribe una función que tome un 
array de números y devuelva un nuevo array que solo contenga los números pares. 
Utiliza una función flecha para realizar esta operación. */

let numeros = ['1','2','3','4','5','6','7','8','9','10']; //Guardamos un array de numeros de donde obtendremos los pares


let operacion= (array) => { //Declaramos una función que recibe un array 
     let numerosPares=array.filter(numero=> numero%2===0); // Filtramos en nuestro array original, guardando en otro array los números que cumplan la condición de ser primos. filter() evalua número a número
     return numerosPares; //Devolvemos el array resultante
}

let resultado = operacion(numeros); //Llamamos a la función introduciendo el array números
console.log(resultado); //Mostramos el array de números pares