"use strict";

//La tabla con id="age-table".
let table= document.getElementById('age-table');
console.log("Tabla:", table);

//Todos los elementos label dentro de la tabla (debería haber 3).
let lableList= table.getElementsByTagName('label');
console.log("Lista labels:", lableList);

//El primer td en la tabla (con la palabra “age”).
let firstTd= table.querySelector('td');
console.log("Td con age:", firstTd);

//El form con name="search".
let form= document.forms['search'];
console.log("Form con search:", form);

//El primer input en ese formulario.
let firstInput= form.querySelector('input');
console.log("Primer input:", firstInput);

//El último input en ese formulario.
let totalInputs= form.querySelectorAll('input');
let lastInput= totalInputs[totalInputs.length - 1];  //Calculamos la longitud del array menos 1 posición para seleccionar el último input
console.log("Ultimo input:", lastInput);

