"use strict";

/*Escribe una función flecha que cree una publicación de blog. La función debe tomar un título y
un contenido como argumentos obligatorios. También puede tomar una lista de etiquetas opcional. Si 
no se proporcionan etiquetas, la publicación se creará sin ellas. */

let publicacion = (titulo, contenido, etiquetas=[]) =>{  //Etiqueta es un valor opcional por lo que la igualamos a un array vacio
    document.write("<h1>" + titulo + "</h1>" );  //Escribimos con la herramienta document.write (similar a echo en php)
    document.write("<p>"+ contenido +"</p>");
    document.write("<ul>");
    etiquetas.forEach((etiqueta)=>{ //Funcion flecha que recorre el array y escribe cada etiqueta
        document.write("<li>" +etiqueta+ "</li>");
    });
    document.write("</ul>");    

}

publicacion("Mi Blog","Este blog es un ejemplo de como de vería. Esto es el contenido",["Esto es una etiqueta","etiqueta2"]);  //Llamos a la función e introducimos los valores

