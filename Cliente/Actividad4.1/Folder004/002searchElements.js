"use strict";

let table= document.getElementById('age-table');
console.log("Tabla:", table);

let lableList= table.getElementsByTagName('label');
console.log("Lista labels:", lableList);

let firstTd= table.querySelector('td');
console.log("Td con age:", firstTd);

let form= document.forms['search'];
console.log("Form con search:", form);

let firstInput= form.querySelector('input');
console.log("Primer input:", firstInput);

let totalInputs= form.querySelectorAll('input');
let lastInput= totalInputs[totalInputs.length - 1];
console.log("Ultimo input:", lastInput);

