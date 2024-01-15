"use strict";

//001 - Usando JavaScript, agrega una nueva fila a la tabla con los siguientes datos: "Pedro", "28", "Colombia".

const tabla= document.getElementById("miTabla");

let nuevaFila= tabla.insertRow(); //Insertamos una nueva fila

let celdaNombre = nuevaFila.insertCell(0); //E insertamos sus celdas
let celdaEdad = nuevaFila.insertCell(1);
let celdaPais = nuevaFila.insertCell(2);

celdaNombre.innerHTML = "Pedro"; //Añadimos contenido a las celdas
celdaEdad.innerHTML = "28";
celdaPais.innerHTML = "Colombia";