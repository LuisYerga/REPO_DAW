"use strict";

/*Muestra en pantalla un día de la semana Escribe una función getWeekDay(date) para mostrar el día de la semana en formato corto: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
Por ejemplo:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // debería mostrar "TU"*/

let date = new Date(2012, 0, 3); 

/* Función hecha con elvis. Asignamos a dia la abrebiación según el valor que detecte getDay. Es mas tediosa pero funciona
function getWeekDay(fecha){
    let dia=fecha.getDay() === 0 ? 'SU' : (fecha.getDay() === 1 ? 'MO' : (fecha.getDay() === 2 ? 'TU' :(fecha.getDay() === 3 ? 'WE' : (fecha.getDay() === 4 ? 'TH' :(fecha.getDay() === 5 ? 'FR' : 'SA')))));
    return dia;
}*/

function getWeekDay(fecha){
    let diaSemana=new Array('SU','MO','TU','WE', 'TH', 'FR', 'SA'); //Creamos un array con las abrebiaciones en su orden de valores segun getDay() (0=Sunday)
    let dia=fecha.getDay(); //Obtenemos el valor del dia de la semana
    let resultado= diaSemana[dia]; //Accedemos al array según del dia que sea
    return resultado;
}

alert(getWeekDay(date));