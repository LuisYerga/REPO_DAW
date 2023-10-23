"use strict";

/*Cambia el formato a fecha relativa. Escribe una función formatDate(date) que muestre la fecha en el siguiente formato:
Si a partir de la fecha date pasó menos de 1 segundo, debe devolver "ahora mismo".
De no ser así, si a partir de la fecha date pasó menos de 1 minuto, debe retornar "hace n seg,".
De no ser así, si pasó menos de una hora, debe devolver "hace n min.".
De no ser así, debe retornar la fecha completa en el formato "DD.MM.AA HH:mm". Es decir: "día.mes.año horas:minutos", 
cada uno de ellos en formato de 2 dígitos, por ej. 31.12.16 10:00.*/

function formatDate(date){
    let currentDate= new Date(); //Obtenemos la fecha actual
    let diferencia = currentDate-date; //Calculamos la diferencia con la fecha metida
    if(diferencia<0){ //Si es un número negativo significa que no se ha llegado aún
        return "Aun no pasa";
    }else if(diferencia < 1000 && diferencia > 0){ //Si es menor a 1000 milisegundos se muestra el mensaje. Comparamos con milisegundos para mayor precisión
        return "Ahora mismo";
    }else if(diferencia < 60000){
        let difSecc= Math.floor(diferencia/1000); //Pasamos a segundos y posteriormente a minutos para mostrar por pantalla
        return `Hace ${difSecc} seg`;
    }else if (diferencia < 3600000){
        let difMin= Math.floor(difSecc/60);
        return `Hace ${difMin} min`;
    }else{
        let day=date.getDate(); //Sacamos todos los datos de la fecha
        let month= date.getMonth() +1; //Sumamos 1 puesto que se empieza en el mes 0 (Enero), de esta forma mostramos bien por pantalla el mes
        let year= date.getFullYear();
        let hour = date.getHours();
        let minut = date.getMinutes();
        let hourFormat = hour.toString().padStart(2,"0"); //Para los minutos y horas nos aseguramos que se muestren dos dígitos(Se añade un 0 delante si es un solo dígito)
        let minutFormat= minut.toString().padStart(2,"0");
        return `${day}.${month}.${year}.${hourFormat}:${minutFormat}`; 
    }
}

alert(formatDate(new Date(2023,9,24,0,13)));