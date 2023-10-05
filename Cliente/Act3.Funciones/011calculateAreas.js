"use strict";

/*Crea una función que pueda calcular el área de diferentes figuras geométricas, como triángulos, círculos y rectángulos. La función
debe tomar el tipo de figura y los parámetros necesarios para calcular el área. Si no se proporcionan los parámetros necesarios, la 
función debería devolver un mensaje indicando que no se pueden calcular el área. Pista: necesitarás usar parámetros opcionales, quizás el uso del operador "..." te sea útil. */

let calcularArea= (nombre, parametro1 , parametro2) =>{
    parametro2 = parametro2 ?? 0; //Si parametro2 es nulo le asignamos el 0 (operador opcional)
    let resultado= parametro2 === 0 ? 3.14 * Math.pow(parametro1,2) : (nombre==="Triángulo" ? (parametro1*parametro2)/2 : (nombre === "Cuadrado" ? parametro1*parametro2 :("Algo ha salido mal. Revise el uso de mayúsculas, tildes y asegurese que el nombre coincide con los datos dadoss")));
    // Comprobamos si parametro2 tiene un valor por defecto. En cuyo caso la figura se trata de un círculo. Si tiene un valor pasamos a comprobar cual es el nombre de la figura introducida por el usuario. Si nada coincide le lanzamos un mensaje al usuario
    return resultado;
};

let figura = prompt("Introduzca una figura. Recuerde escribir la primera letra en mayúsculas"); //Preguntamos cual es la figura que quiere el usuario

let mensaje = calcularArea(figura,5,6); //Introducimos los valores en la función

alert("El área de "+figura+ "es: " + mensaje);