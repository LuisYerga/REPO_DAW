"use strict";

//002 - Usando JavaScript, selecciona el primer elemento li dentro de la lista y verifica si tiene el atributo data-tipo. Si lo tiene, imprime en la consola su valor, de lo contrario, imprime "El atributo data-tipo no está presente".

let li=document.querySelector('ul').firstElementChild; 

//Comprobamos si está el atributo data-tipo

if(li.getAttribute('data-tipo')){ 
    console.log("El valor de data-tipo es:", li.getAttribute('data-tipo'));
}else{
    console.log("No hay atributo data-tipo en el li")
}