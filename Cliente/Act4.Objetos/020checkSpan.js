"use strict";

/*Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o ‘XXX’, de lo contrario false. La función debe ser insensible a mayúsculas y minúsculas:
checkSpam('compra ViAgRA ahora') == true
checkSpam('xxxxx gratis') == true
checkSpam("coneja inocente") == false*/

function checkSpam(cadena){
    cadena=cadena.toLowerCase(); //Pasamos la cadena a minúsculas
    if(cadena.indexOf("viagra") !=-1 || cadena.indexOf("xxx") !=-1){ //Con indexOf buscamos si la palabra existe en nuestro string. Si se encuentra se devuelve su posición entrando al if, si no se encuentra se devuelve -1 entrando al else
        alert(true);
    }else{
        alert(false);
    }
}

checkSpam('compra ViAgRA ahora');
checkSpam("coneja inocente");