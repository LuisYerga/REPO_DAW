"use strict";

/*: Tenemos un objeto que almacena los salarios de nuestro equipo:
let salaries = {
  Harry: 100,
  Ron 160,
  Hermione: 130
}
Escribe el código para sumar todos los salarios y almacenar el resultado en la variable sum. En el ejemplo de arriba nos debería dar 390. 
Si salaries está vacío entonces el resultado será 0.*/

let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
}

function suma(salaries){
    let sum=0;
    for(let key in salaries){
        if(salaries.hasOwnProperty(key)){  //Si el objeto tiene contenido se ejecuta el calculo de los salarios
            sum += salaries[key]; //Se suma el resultado anterior con el salario del empleado (Accediendo mediante key)
        }else{ //En caso contrario se devuelve un 0
            return 0;
        }
    }
    return sum; // Se devuelve el resultado del for
}

alert(suma(salaries)); //Llamamos a la función