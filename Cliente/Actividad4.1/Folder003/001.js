"use strict";

//Usando JavaScript, selecciona el enlace (<a>) y verifica si tiene el atributo target. Si lo tiene, imprime en la consola su valor, de lo contrario, imprime "El atributo target no está presente".

let enlace= document.querySelector('a');  

//Comprobamos si está el atributo target

if(enlace.getAttribute('target') ){
    console.log('El valor de target es:', enlace.getAttribute('target'));
}else{
    console.log('El atributo target no esta en el enlace');
}