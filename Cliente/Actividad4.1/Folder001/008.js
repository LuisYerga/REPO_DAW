"use strict";

//008 -Usando previousElementSibling, selecciona y muestra en la consola el elemento anterior al párrafo con clase parrafo.

const parrafo= document.querySelector('.parrafo');

const anterior= parrafo.previousElementSibling;

console.log("El elemento anterior a parrafo es:", anterior);
