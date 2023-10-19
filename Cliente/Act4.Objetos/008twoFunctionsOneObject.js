"use strict";

/*¿Es posible crear las funciones A y B para que se cumpla new A() == new B()?
function A() { ... }
function B() { ... }
let a = new A();
let b = new B();
alert( a == b ); // true
Si es posible, entonces proporcione un ejemplo de código.*/

function A(){
    this.value = 1;
}

function B(){
    this.value = 1;
}

let a = new A();
let b = new B();

alert (a==b);

//No se puede dar el caso que el operador == devuelva true puesto que siempre serán objetos diferentes aunque estos tengan un contenido identico