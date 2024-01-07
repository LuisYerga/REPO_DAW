"use strict";

//002- Cambia el nombre de "Carlos" a "Juan" y actualiza su edad a "26".

let filas= tabla.getElementsByTagName("tr");   //Guardamos todas las filas de la tabla

for(let i=1; i<filas.length; i++){  //Iteramos por las filas, empezando por la fila 1 puesto que la 0 es th y no td
    let celdas= filas[i].getElementsByTagName("td");  //Guardamos los elementos de la celda (td) de la fila en la que nos encontremos

    if(celdas[0].innerHTML === "Carlos"){ //Comparamos el contenido de la primera celda
        celdas[0].innerHTML= "Juan"; //Cambiamos los valores de la celda
        celdas[1].innerHTML="26";
        break;
    }
}