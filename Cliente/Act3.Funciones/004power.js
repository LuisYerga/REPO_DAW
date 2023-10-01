"use strict";

/*Función pow(x,n): Escriba la función pow(x,n) que devuelva x como potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el resultado.

pow(3, 2) = 3 * 3 = 9

pow(3, 3) = 3 * 3 * 3 = 27

pow(1, 100) = 1 * 1 * ...* 1 = 1

Cree una página web que solicite x y n, y luego muestre el resultado de pow(x,n).

Nota: La función solo debe admitir valores naturales de n: enteros desde 1. */ 

let num=2;
let potencia=3;

function pow(num,potencia){ //En la función devolvemos el número elevado
    return num**potencia;
};

num<1 ? true : (potencia<1 ? true : (alert (pow(num,potencia))));   //Comprobamos antes de llamar a la función que num y potencia sean mayores que 0. En caso de serlo llamamos a la función
