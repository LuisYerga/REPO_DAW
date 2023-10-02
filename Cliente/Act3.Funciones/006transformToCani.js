"use strict";

/*Crear una función que reciba una cadena y la devuelva transformada en Cani. Por ejemplo, 
si le pasamos a la función la cadena "una cadena cani es como ésta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH". 
Para ello, hay que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir tres letras H al final. */

let cadenaOriginal="Esta será nuestra cadena original";
let resultado;
function converison(cadenaOriginal){

  cadenaOriginal.toLowerCase;

  let semiCani= cadenaOriginal.replace("c", "k");

  for(let i=0;i<cadenaOriginal.length;i++){
    let numero =Math.random()*(2-1+1)+1;
    numero==0 ? semiCani[i].toLowerCase : semiCani[i].toUpperCase;
  };

  semiCani.concat("HHH");
  alert(semiCani);
  return semiCani;
}

resultado=converison(cadenaOriginal);

alert(`El resultado es ${resultado}`);