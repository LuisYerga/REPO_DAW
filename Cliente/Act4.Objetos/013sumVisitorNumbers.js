"use strict";

/*Crea un script que pida al visitante que ingrese dos números y muestre su suma. P.D. Hay una trampa con los tipos de valores.*/

let numero1 = +prompt("Introduce un número"); //Introducimos un número en la variable mediante el prompt. + delante lo convertirá en int o float dependiendo del contenido

if(!isNaN(numero1)){ //Si el número tiene el formato correcto se ejecuta el if
    let numero2 = +prompt("Introduzca otro número"); //Pedimos otro número al user
    if(!isNaN(numero2)){ //Comprobamos de nuevo con el nuevo parámetro
        let suma= numero1 +numero2; //Sumamos y mostramos
        alert("La suma de los números " + numero1 + " y " + numero2 + " es " + suma);
    }else{
        alert("El numero no es valido");
    }
}else{ //En caso contrario se advierte al usuario
    alert("El numero no es valido");
}