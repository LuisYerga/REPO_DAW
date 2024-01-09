"use strict";

//006 - Usando JavaScript, selecciona el enlace (<a>) y verifica si tiene algún atributo personalizado en el dataset. Si los tiene, imprime en la consola todos los atributos personalizados presentes.

let dataset= enlace.dataset; //Seleccionamos los dataset

console.log("Atributos personalizados:");
for(let atributo in dataset){ //Iteramos por los elementos
    console.log(atributo, '-', dataset[atributo]); //Accedemos al atributo dentro del dataset
}