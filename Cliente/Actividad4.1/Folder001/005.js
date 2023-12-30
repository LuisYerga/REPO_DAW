"use strict";

//005- Usando children, selecciona y muestra en la consola todos los elementos hijos de la lista desordenada (ul).

const list= document.querySelector('ul');  //

const childList= list.children;

console.log("Hijos de la lista", childList);