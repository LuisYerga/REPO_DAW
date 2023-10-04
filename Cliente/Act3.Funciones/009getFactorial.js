"use strict";

/*Escribe una función que tome un número entero positivo como argumento y devuelva su factorial.
El factorial de un número es el producto de todos los enteros positivos desde 1 hasta ese número. */

let numEntero=1;

let resultado;

let operacion= (num) => { //En nuestra función entra el número que hemos introducido
    if (num===1){  //Cuando num alcance el valor 1 lo devlveremos
        return 1;
    }
    return num * operacion(num-1); //Haremos llamadas recursivas al número inmediatamente anterior hasta llegar a 1. Cuando esto ocurra se comenzarán a realizar las operaciones hasta llegar a nuestro número original
    //Ejemplo: num(2)*operacion(1)/ Siguiente num(3)*operacion(2)/ Siguiente num(4)*operacion(6)....
};

numEntero >0 ? resultado=operacion(numEntero) : false; //Si el numero es mayor a 0 entramos a la función
console.log(resultado);