"use strict";

/*Ejecuta sobre el siguiente array las operaciones pedidas: */

var fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.unshift("Cereza");

//Añadimos melocotón al final
fruits.push("Melocotón");

//Mostrar el array elemento a elemento con for clásico
for(let i=0;i<fruits.length;i++){ //iteramos por el array mientras se encuentren posiciones
    alert(fruits[i]);
}

//Eliminamos el primer elemento.
fruits.shift();

//Eliminamos el último elemento.
fruits.pop();

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
for(let fruta of fruits){ //Usamos for of para mostrar el contenido dentro de fruits. For in no se recomienda en arrays puesto que accede a más allá del valor numérico pudiendo dar lugar a errores y siendo más lento
    alert(fruta);
}

