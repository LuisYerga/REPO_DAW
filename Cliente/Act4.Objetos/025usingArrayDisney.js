"use strict";

/*Ejecuta sobre el siguiente array las operaciones pedidas:*/

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];

//Meter a Peter Pan al final del array disney.
disney.push({nombre: "Peter Pan", pelicula:"Peter Pan"});

//Pintar el array
for(let personaje of disney){ //Mostramos con un for of
    alert("Nombre:" + personaje.nombre + ", Película: " + personaje.pelicula);
}

//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({nombre: "Capitán Garfio", pelicula:"Peter Pan"});

//Meter al cocodrilo detrás del capitán, no olvides la película
let posicion= disney.findIndex(personaje=>personaje.nombre==="Capitán Garfio"); //Obtenemos la posición del capitán con findIndex
disney.splice(posicion + 1 , 0, {nombre: "Cocodrilo", pelicula:"Peter Pan"}); //Con splice añadinmos al cocodrilo justo detrás del capitan e indicamos que no se elimine nada.

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
for(let personaje of disney){
    if(personaje.pelicula == "Peter Pan"){ //Filtramos a los personajes de Peter Pan
        alert("Nombre:" + personaje.nombre + ", Película: " + personaje.pelicula);
    }
}

//Encontrar el índice de Campanilla.
alert(disney.findIndex(personaje=>personaje.nombre==="Campanilla"));

//Buscar al cocodrilo.
alert(disney.findIndex(personaje=>personaje.nombre==="Cocodrilo"));

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.

function shuffle(disney){
    for(let i = disney.length - 1; i>0;i--){ //Recorremos el array a la inversa
        let j= Math.floor(Math.random() * (i+1)); //Y calculamos un número aleatorio en el margen entre nuestra posición (i) y la primera posición(0)
        [disney[i], disney[j]] = [disney[j], disney[i]]; //Intercambiamos los valores de las dos posiciones i y j(Metodo de deconstrucción). Ej: i=j y j=i. Nos ahorramos así crear variables temporales.
    }
}

shuffle(disney);
console.log(disney); 