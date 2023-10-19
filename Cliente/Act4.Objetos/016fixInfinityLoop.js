"use strict";

/*Este bucle es infinito. Nunca termina, ¿por qué?
let i = 0;
while (i != 10) {
  i += 0.2;
}*/

let i = 0;
while (i != 10) {
  i += 0.2;
  alert(i);
}

/*A lo largo del bucle se va aumentando la cantidad de i. Sin embargo conforme se avance en la suma se darán una serie de imprecisiones acabando el numero 
por tener el valor 9.99999, no cumpliendose el requisito necesario para salir. Una posíble solución es limitar el numero de decimales para que sea mas fácil realizar la suma*/