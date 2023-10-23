"use strict";

/*Crea un objeto a partir de un array Supongamos que recibimos un array de personajes con la forma {id:..., nombre:..., pelicula:... }.
Crea una función groupById(arr) que cree un objeto, con id como clave (key) y los elementos del array como valores. Dicha función es
realmente útil cuando trabajamos con información del servidor.
Para esta actividad asumimos que cada id es único. No existen dos elementos del array con el mismo id.
Usa el método de array .reduce en la solución.*/

let personajes=[ //Array de objetos
    { id:1,nombre:"Peter Pan", pelicula:"Peter Pan" },
    { id:2,nombre: "Megana", pelicula: "Hércules" },
    { id:5,nombre: "Hades", pelicula: "Hércules" },
    { id:4,nombre: "Campanilla", pelicula: "Peter Pan" },
    { id:3,nombre: "Wendy", pelicula: "Peter Pan" }
]

function groupById(arr){ 
    return arr.reduce((acumulador, personaje)=>{  //Iteramos por cada personaje del array agregando como propiedad de acumulador el propio objeto y usando su id como clave. Se devuelve el acumulador una vez contenga todos los objetos del array
        acumulador[personaje.id] = personaje;
        return acumulador;   //Acumulador debe ser lo que devolvamos a la función
    },{}); //Establecemos como valor inicial un objeto vacío
}

let resultado= groupById(personajes);
console.log(resultado);
