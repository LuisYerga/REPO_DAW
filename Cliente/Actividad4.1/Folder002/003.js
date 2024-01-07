"use strict";

//003 - Selecciona y muestra en la consola el nombre de la persona que tiene la edad más alta en la tabla.

let edadMax= 0;
let nombreMax='';

for(let i=1; i<filas.length; i++){  //Iteramos por las filas
    let celdas= filas[i].getElementsByTagName("td");  //Guardamos los elementos de la celda (td) de la fila en la que nos encontremos

    let edadComparar= celdas[1].innerHTML; //Guardamos la edad de aquel que comparamos

    if(edadComparar>edadMax){ //Comprobamos edades y cambiamos los máximos si es necesario
        edadMax=edadComparar;
        nombreMax=celdas[0].innerHTML;
    }
}

console.log("La persona cuya edad es más alta es:" , nombreMax);