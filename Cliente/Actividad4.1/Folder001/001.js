"use strict"

// 001-Usando childNodes, selecciona y muestra en la consola todos los nodos hijos del div con id contenedor.

const container= document.getElementById('contenedor'); //Seleccionamos el contenedor por su id

const childCont= container.childNodes; //Seleccionamos todos los nodos del contenedor

console.log("Los hijos son:" , childCont); 