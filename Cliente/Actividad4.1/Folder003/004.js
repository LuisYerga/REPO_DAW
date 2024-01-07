"use strict";

//004 - Usando JavaScript, selecciona el título (<h1>) y agrega un nuevo atributo llamado style con el valor color: blue;

let titulo= document.querySelector('h1');
titulo.setAttribute('style', 'color:blue;');

console.log(titulo.getAttribute('style'));