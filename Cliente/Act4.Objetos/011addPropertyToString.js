"use strict";

/*¿Puedo agregar una propiedad a un string?: Considera el siguiente código:
let str = "Peter";
str.test = 5;
alert(str.test);
Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué?*/

let str = "Peter";
str.test = 5;
alert(str.test);

//No se puede añadir propiedades a un tipo primitivo como string o int. De esta forma JavaScript no reconocerá nada al intentar acceder a str.test y no se devolverá nada.
