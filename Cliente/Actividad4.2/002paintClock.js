"use strict";

let elementHour= document.getElementById('hora');  //Obtenemos los elements (p) donde mostraremos nuestros datos
let elementMin= document.getElementById('minutos');
let elementSec= document.getElementById('segundos');

let intervalo;

function update(){ //Función que obtiene la fecha actual y extrae los datos concretos para ser insertados como texto
    let dateNow= new Date();
    let hora= dateNow.getHours();
    elementHour.textContent=String(hora).padStart(2,"0")+ ":";
    let min=dateNow.getMinutes();
    elementMin.textContent=String(min).padStart(2,"0") + ":";
    let sec= dateNow.getSeconds();
    elementSec.textContent=String(sec).padStart(2,"0");
}

function start(){  //Función con intervalo cada 1000 milisegundos (1seg) que llama a la función update para actualizar el reloj
    intervalo= setInterval(update, 1000);
}

function stop(){ //Función que detiene el reloj por medio de eliminar el intervalo
    clearInterval(intervalo);
}

document.getElementById('start').addEventListener('click', start);  //Obtenemos los botones por medio de la id y añadimos una llamada a una función si son clicados
document.getElementById('stop').addEventListener('click', stop);