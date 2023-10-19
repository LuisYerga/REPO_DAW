"use strict";

/*Crea una función readNumber que pida un número hasta que el visitante ingrese un valor numérico válido. 
El valor resultante debe ser devuelto como number. El visitante puede también detener el proceso ingresando una línea 
vacía o presionando “CANCEL”. En tal caso la función debe devolver null. */

let numero;
function readNumber(){
    do{
        numero= prompt("Mete un número"); //Nuestra función se repite hasta que se da un número válido.
    }while(isNaN(numero));
    if(numero.trim()=="" || numero==null){ //Si se ha salido del bucle por medio de cancelar(numero==null) o de dejar espacios(los cuales se eliminan con trim()) se envía el mesaje null
        alert("Null");
    }else{ //En caso contrario se muestra el número
        alert(numero);
    }
    
}

readNumber();