"use strict";

//005 - Usando JavaScript, selecciona el primer elemento li y elimina su atributo data-tipo. Luego, imprime en la consola la lista de atributos restantes.

li.removeAttribute('data-tipo');

let atributosLi=li.attributes;
console.log('Lista de atributos:');
for( let atributo of atributosLi){
    console.log(atributo.name,':' ,atributo.value);
}