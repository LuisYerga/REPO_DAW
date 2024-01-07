"use strict";

//003 - Usando JavaScript, selecciona el párrafo con clase parrafo y cambia su atributo data-tipo a "nuevo-parrafo". Luego, imprime en la consola el nuevo valor del atributo.

let parrafo=document.querySelector('p.parrafo');

parrafo.setAttribute('data-tipo', 'nuevo-parrafo');

let valorDataTipo= parrafo.getAttribute('data-tipo');
console.log('El valor de data-tipo es:' , valorDataTipo);