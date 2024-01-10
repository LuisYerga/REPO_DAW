"use strict";

let elem= document.getElementById('calendario');

function createCalendar(elem, year, month){
    let daysList=["Do","Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]; //Array de dias de la semana

    let numberDays= new Date(year,month, 0).getDate(); //Obtenemos el número de dias del mes

    let newRow;

    for(let day=1; day<=numberDays; day++){ //Iteramos los dias hasta llegar al final del mes
        let positioDay=new Date(year, month-1, day); //Sacamos la posición del dia en la semana (Siendo 0 el domingo). El registro de mes va de 0 a 11, por ello restamos para cuadrar
        console.log(positioDay);
        let dayOfWeek=daysList[positioDay.getDay()]; //Accedemos al dia de la semana correspondiente del array.
        console.log(dayOfWeek);
        if(dayOfWeek==="Lu"){  //Si este es lunes se crea una nueva fila en el calendario al final de sus hermanas
            newRow= elem.insertRow(-1);
        }else if(day===1){  //Si el dia es el primero del mes creamos una fila y llenamos celdas vacias hasta llegar a la posición de su dia de la semana
            newRow= elem.insertRow(-1);
            for (let i = 1; i < positioDay.getDay(); i++) {
                newRow.insertCell(-1);
            }
        }
        let newCell= newRow.insertCell(-1);  //Creamos una nueva celda y la rellenamos con su dia correspondiente
        newCell.textContent=day;
    }
}

createCalendar(elem,2024,3);