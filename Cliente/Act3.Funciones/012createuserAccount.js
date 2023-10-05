"use strict";

/*Escribe una función que cree una cuenta de usuario. La función debe tomar un nombre de usuario y una 
dirección de correo electrónico como argumentos obligatorios. También puede tomar un número de teléfono opcional.
Si el número de teléfono no se proporciona, la cuenta se creará sin él. */

let crearCuenta = (nombre,correo,tlf="")=>{  //Establecemos el teléfono como vacio en caso de que no se reciba un valor
    let cuenta=[nombre,correo,tlf];
    return cuenta; //Devolvemos el array con los datos
}

let usuario1 =crearCuenta("Luis", "lyergamayor1@gmail.com", 674836555); //Introducimos los datos con los que se forma la cuenta
let usuario2 = crearCuenta("Olga" , "olga3emes@gmail.com");

console.log(usuario1);
console.log(usuario2);