"use strict";

/*Escribe una función getLastDayOfMonth(year, month) que devuelva el último día del mes dado. A veces es 30, 31 o incluso 28/29 para febrero. Parámetros:
year – el año en formato de cuatro dígitos, por ejemplo 2012.
month – el mes, de 0 a 11.
Por ejemplo, getLastDayOfMonth(2012, 1) = 29 (febrero, año bisiesto).*/

function getLastDayOfMonth(year,month){
    let date= new Date(year,month +1, 0);  //Al introducir el dia 0 se busca en el último dia del mes anterior, por ello ampliamos el mes dado a uno más
    return date.getDate(); //Devolvemos el día
}

alert(getLastDayOfMonth(2012, 1));