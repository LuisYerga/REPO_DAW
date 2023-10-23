"use strict";

/*En los países europeos se cuentan los días de la semana a partir del lunes (número 1), seguido del martes (número 2), 
hasta el domingo (número 7). Escribe una función getLocalDay(date) que devuelva el día de la semana “europeo” para la variable date. 
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) ); // tuesday, should show 2
Una vez lo obtengas, tradúcelo a español.*/

let date = new Date(2012, 0, 3); 
let diaEuropeo;

function getLocalDay(date){
    let diaIngles=date.getDay();
    return diaEuropeo= diaIngles=== 0 ? 7 : diaIngles; //Si es 0 se convierte en 7, el resto esta en orden correcto.
}

alert( getLocalDay(date) );

switch(diaEuropeo){ //Switch con las traducciones en cada caso
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;
    default:
        alert("Algo fue mal");
        break;
}
