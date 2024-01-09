"use strict";

//004- Usando parentElement, selecciona y muestra en la consola el elemento padre del h1.

let h1= document.querySelector('h1'); //Seleccionamos el primer h1 a través de los selectores. 

let padreh1= h1.parentElement; //Seleccionamos al padre del h1 

console.log("El elemento del h1:" , padreh1);