"use strict";

/*Ejecuta sobre el siguiente array las operaciones pedidas:*/

 var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
let metal = grupos.filter(banda=> banda.genero ==="Heavy Metal"); //Iteramos al igual que con map pero buscando que se cumpla una condición. Se devuelve un array con las coincidencia que se den
console.log(metal);

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let coldPlay = grupos.find(grupo=> grupo.nombre ==="Cold Play"); //Funciona igual que filter solo que este busca solo una coincidencia y la devuelve como string
console.log(coldPlay);

//¿En qué posición del array se encuenta “Cold Play”?
let coldPlayPos = grupos.findIndex(grupo=> grupo.nombre ==="Cold Play"); //Buscamos devolver unicamente la posición en el array de objetos
console.log(coldPlayPos);
