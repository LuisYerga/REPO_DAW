"use strict";

/*Tenemos un coste en forma de “$120”. Es decir: el signo de dólar va primero y luego el número. Crea una función 
extractCurrencyValue(str) que extraiga el valor numérico de dicho string y lo devuelva. Por ejemplo:
alert( extractCurrencyValue('$120') === 120 ); // true*/

function extractCurrencyValue(str){
    let dinero= +str.slice(1); //Guardamos como int el resto de la cadena ignorando el símbolo
    return dinero;
}

alert( extractCurrencyValue('$120') === 120); //Se devuelve true pues son dos ints de igual valor