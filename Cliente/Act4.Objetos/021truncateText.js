"use strict";

/*Crea una función truncate(str, maxlength) que verifique la longitud de str y, si excede maxlength – reemplaza el final de str con el carácter de 
puntos suspensivos "…", para hacer su longitud igual a maxlength. El resultado de la función debe ser la cadena truncada (si es necesario). Por ejemplo:

truncate("Lo que me gustaría contar sobre este tema es:", 20) = "Lo que me gustaría c…"
truncate("Hola a todos!", 20) = "Hola a todos!"*/

function truncate(str, maxlength){
    if(str.length > maxlength){ //Si la longitud de la cadena es mayor al máximo establecido entramos al if
        str=str.slice(0,maxlength) + "..."; //Guardamos la nueva cadena que para en el límite de caracteres y concatena los puntos suspensivos
        return str;
    }
    return str; //Devolvemos la cadena si esta no necesita ser recortada
}

alert(truncate("Lo que me gustaría contar sobre este tema es:", 20));
alert(truncate("Hola a todos!", 20));