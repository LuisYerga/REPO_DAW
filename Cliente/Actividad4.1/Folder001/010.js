"use strict";

//010- Usando JavaScript, selecciona el primer elemento li dentro de la lista y muestra en la consola su nodeType, nodeName y tagName.

const li=document.querySelector('ul').firstElementChild;

console.log("nodeType del primer li:", li.nodeType);
console.log("nodeName del primer li:", li.nodeName);
console.log("tagName del primer li:", li.tagName);