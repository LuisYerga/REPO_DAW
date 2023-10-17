"use strict";

/*Escribe el código, una línea para cada acción:
Crea un objeto user vacío.
Agrega la propiedad name con el valor John Snow.
Agrega la propiedad surname con el valor Sam Sagaz.
Cambia el valor de name a Peter Pan.
Quita la propiedad name del objeto.*/

let user= {};

user.name="John Snow"; //Cramos un name y un surname los cuales pueden modificarse o eliminarse
user.surname= "Sam Sagaz";
user.name="Peter Pan";
alert(user.name);
delete user.name;