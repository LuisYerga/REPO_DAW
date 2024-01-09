"use strict";

//005- Usando children, selecciona y muestra en la consola todos los elementos hijos de la lista desordenada (ul).

let list= document.querySelector('ul');  //Seleccionamos a través de los selectores

let childList= list.children;   //Seleccionamos los hijos de ul

console.log("Hijos de la lista", childList);