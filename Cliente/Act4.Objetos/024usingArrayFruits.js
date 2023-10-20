"use strict";

/*Ejecuta sobre el siguiente array las operaciones pedidas: */

var fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
fruits.unshift("Cereza");
//Añadimos melocotón al final
fruits.push("Melocotón");
//Mostrar el array elemento a elemento con for clásico
for(let i=0;i<fruits.length;i++){
    alert(fruits[i]);
}
//Eliminamos el primer elemento.
fruits.shift();
//Eliminamos el último elemento.
fruits.pop();
//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
for(let fruta of fruits){
    alert(fruta);
}

