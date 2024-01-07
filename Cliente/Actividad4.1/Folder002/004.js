"use strict";

//004 -Agrega una nueva columna al final de cada fila con el texto "Acción" y dentro de cada celda de esta columna agrega un botón con el texto "Eliminar".

for(let i=0; i<filas.length; i++){
    let celdasColumna=filas[i].insertCell(-1);//Creamos una nueva celda al lado de la última de la fila
    if(i!=0){ //Si no se trata de la celda de la primera fila añadimos un botón
        let botonEliminar=document.createElement("button");
        botonEliminar.textContent="Eliminar";   
        celdasColumna.appendChild(botonEliminar);//Añadimos el botón como hijo de la celda
    }else{//En caso contrario añadimos el texto de Acción
        celdasColumna.textContent="Acción"; 
    }

}

