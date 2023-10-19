"use strict";

/*Contesta los siguientes comentarios con respecto a la cadena que contiene la variable thor:  */

let thor = "Thor es el hijo de Odín";

// Largo de la cadena
alert(thor.length);

//Encontrar la letra o
alert(thor.indexOf("o")); //Devulve la posición de la primera o

//Encontrar el carácter que ocupa la posición 3
alert(thor.charAt(3));

//¿Qué carácter ocupa la posición 1?
alert(thor.charAt(1));

//Trocea la cadena usando los espacios en blanco
let division= thor.split(" "); //Dividimos al encontrar un espacio
alert(division);    

//Reemplaza Thor por Loki
thor= thor.replace("Thor", "Loki");
alert(thor);

//Recorta la cadena para que devuelva la palabra Odín
let Odin= thor.substring(thor.indexOf("Odín")); //Creamos un substring que empiece en la primera posición de la palabra Odin y llegue hasta el final de la cadena
alert(Odin);

//¿Puedes encontrar la letra a? Demuéstralo
alert(thor.indexOf("a"));
//No se puede puesto que el texto no tiene a. En su lugar se muestra -1

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let frase= thor.substring(0,12) + thor.substring(12).toLowerCase(); //Dejamos las primeras 11 letras iguales(el 12 no se incluye), y el resto las pasamos a minúsculas
alert(frase);