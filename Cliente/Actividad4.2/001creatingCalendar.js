"use strict";

let elem= document.getElementById('calendario');

function createCalendar(elem, year, month){
    let daysList=["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"]; //Array de dias de la semana

    let numberDays= new Date(year,month, 0).getDate(); //Nuúmero de dias del mes

    for(let day=0; day<=numberDays; day++){
        let positioDay=new Date(year, month-1, day); //Sacamos el primer dia del mes. El registro de meses va de 0 a 11

        let dayOfWeek=daysList[positioDay.getDay()]; //Accedemos al dia de la semana que es el primer dia

        let newRow;
        if(dayOfWeek==="Lu"){
            newRow= elem.insertRow(-1);
        }else if(dayOfWeek="Do"){
            newRow=null;
        }
        let newCell= newRow.insertCell(-1);
        newCell.textContent=day;
    }



}

createCalendar(elem,2024,1);