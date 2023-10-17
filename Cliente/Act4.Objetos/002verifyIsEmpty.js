"use strict"

/*Escribe la función isEmpty(obj) que devuelva el valor true si el objeto no tiene propiedades, en caso contrario false. Debería funcionar así:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "Hora de levantarse";
alert( isEmpty(schedule) ); // false */

let obj = {};
alert(isEmpty(obj));
obj=["Luis"]
alert(isEmpty(obj));

function isEmpty(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){  //Si el objeto tiene contenido devuelve falso
            return false;
        }
    }
return true;
}