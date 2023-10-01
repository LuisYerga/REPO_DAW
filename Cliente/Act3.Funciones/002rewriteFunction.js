"use strict";

/*Reescribe la función utilizando '?' o '||'. La siguiente función devuelve true si el parámetro age es mayor que 18. De lo contrario, solicita una confirmación
y devuelve su resultado.

function checkAge(age) {

  if (age > 18) {

    return true;

  } else {

    return confirm('¿Tienes permiso de tus padres?');

  }

}

Reescríbela para realizar lo mismo, pero sin if, en una sola línea.

Haz dos variantes de checkAge:

Usando un operador de signo de interrogación ?
Usando OR || */

let age = 17;

function checkAge(age) {
   return age > 18 ? true : confirm('¿Tienes permiso de tus padres?');  //Si la edad es mayor de 18 se devolverá true, si no el confirm preguntará por el permiso y devolverá su valor
};

function checkAge2(age){
    return age > 18 || confirm('¿Tienes permiso de tus padres?');  //Si la edad es mayor de 18(true) se devolverá de manera inmediata devido al funcionamiento del operador ||.
};                                                                 //En caso contrario pasaremos al confirm que devolverá de manera adecuada ambas posibles respuestas, true si uno de los dos es verdadero y false si ambos operandos son falsos

checkAge(age);  //Llamamos a las funciones para que se ejecuten con el valor age
checkAge2(age);