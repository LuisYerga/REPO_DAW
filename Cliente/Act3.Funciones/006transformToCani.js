 "use strict";

/*Crear una función que reciba una cadena y la devuelva transformada en Cani. Por ejemplo, 
si le pasamos a la función la cadena "una cadena cani es como ésta" obtendremos "UnA KaDeNa kAnI Es kOmO EsTaHHH". 
Para ello, hay que alternar el uso de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir tres letras H al final. */

let cadenaOriginal="Esta será nuestra cadena cani en este caso";
let resultado;
function converison(cadenaOriginal){  
  let cani="";
  cadenaOriginal=cadenaOriginal.toLowerCase();  //Convertimos toda la cadena a minúsculas

  let semiCani= cadenaOriginal.replace(/c/g, "k");  //Remplazamos las c's por k's.Usamos la expresión regular g (global) para remplazar todas las c's de la cadena

  for(let i=0;i<cadenaOriginal.length;i++){   //Iteramos a través de la cadena
    let letra= semiCani[i];   //Guardamos la letra en cuya posición nos encontremos en una variable
    let numero =Math.floor(Math.random()*(2-1+1)+1);  //Calculamos un numero random entre 1 y 2. Importante redondear con math.floor
    numero==1 ? letra=letra.toLowerCase() : letra=letra.toUpperCase();  //Si el numero aleatorio es 1 la letra sera minúscula, sino será mayúscula
    cani += letra;  //Concatenamos la letra en nuestro string cani con el resto de letras
  };
  
  cani += "HHH";  //Finalmente concatenamos las 3 h's y devolvemos el resultado
  return cani;
}

resultado=converison(cadenaOriginal);  //Llamamos a la función a la misma vez que guardamos su resultado en la variable

alert(`El resultado es: ${ resultado}`);