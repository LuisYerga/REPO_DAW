"use strict";

//008 -Usando previousElementSibling, selecciona y muestra en la consola el elemento anterior al párrafo con clase parrafo.

let parrafo= document.querySelector('.parrafo');  //Seleccionamos a través de la clase parrafo

let anterior= parrafo.previousElementSibling;  //Hermano anterior de parrafo

console.log("El elemento anterior a parrafo es:", anterior);
