"use strict";

/*Escribe una función ucFirst(str) que devuelva el string str con el primer carácter en mayúscula, por ejemplo:
ucFirst("john") == "John";*/

function ucFirst(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1); //Devolvemos la cadena con el primer caracter en mayúsculas y concatenamos con el resto de la cadena a partir del caracter 1
}

alert(ucFirst("john"));