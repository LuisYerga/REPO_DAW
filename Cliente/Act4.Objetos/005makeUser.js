"use strict";

/*Aquí la función makeUser devuelve un objeto. ¿Cuál es el resultado de acceder a su atributo ref? ¿Por qué?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // ¿Cuál es el resultado?*/

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}

let user = makeUser();
alert( user.ref.name ); 

//No se devuelve nada en un principio. Esto ocurre porque ref se refiere al propio objeto, guardando su nombre el cual es undefined.Para mostrar el nombre es suficiente con user.name