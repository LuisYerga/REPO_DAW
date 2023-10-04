"use strict";

/*Crea una función que tome una cadena de texto y encuentre la subcadena más larga sin caracteres repetidos.*/

let cadena ="abcdeaioubca";  //Creamos nuestra cadena

let separador = (cadena) =>{ //Función flecha que recibe la cadena
    let subCadena="";  //Inicializamos los parametros que nos ayudaran a buscar la cadena más larga
    let subCadenaTemp="";
    let comienzoCadena=0;

    for(let i=0; i<cadena.length ; i++) {  //Recorremos la cadena
        let caracter = cadena[i];  //Guardamos el carácter en cuya posición nos encontremos 
        let existeCaracter = subCadenaTemp.indexOf(caracter); //Comprobamos si el caracter existe ya en nuestra subcadena. Si no se encuentra se devuelve el valor -1.

        if (existeCaracter === -1){ //Ejecutamos el if en caso de que no se hayan encontrado coincidencias entre nuestro carácter actual y la subcadena temporal
            subCadenaTemp += caracter; //Añadimos el carácter
        }else{  // Si existe en la subcadena
            if(subCadenaTemp.length>subCadena.length){  //Comprobamos si la subcadena que hemos formado es más larga que la subcadena donde se ha almacenado la más grande hasta ahora
                subCadena= subCadenaTemp; //En caso de serlo la sustituimos
            }
            comienzoCadena ++;  //Cuando se encuentra una coincidencia en nuestra subcadena, reiniciamos el proceso de crear nueva desde la siguiente posición inmediata con respecto a la cual empezamos
            i = comienzoCadena; //Guardamos esta posición en la i para que el for vuelva atrás. Ejemplo: cadena ="abcde", paramos por coincidencia en a y comenzamos nueva cadena en b. cadena="bcdea..."
            subCadenaTemp = ""; //Reiniciamos la subcandena temporal
        }
    } 
    return subCadenaTemp.length > subCadena.length ? subCadenaTemp : subCadena; //Devolvemos la cadena comprobando antes cual es más grande para devolverla. Esta comparación final soluciona 
                                                                                // el caso de que el bucle for termine con una subCadenaTemp más grande que la subCadena pero que no se haya guardado en esta al no encontrar coincidencia que la interrumpiese (no entrando en el else).
};

let resultado = separador(cadena); //LLamamos a la función y guardamos el resultado
console.log(resultado); 