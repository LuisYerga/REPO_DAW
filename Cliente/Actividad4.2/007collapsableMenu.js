"use strict";

let collapse= document.querySelector('.title'); //Seleccionamos los elementos del html
let desplegable= document.querySelector('ul');



collapse.addEventListener("click", () => desplegable.classList.toggle('active')); //Añadimos un listener que cambie las propiedades de la clase en función este sea pulsado