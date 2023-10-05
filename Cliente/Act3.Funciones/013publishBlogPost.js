"use strict";

/*Escribe una función flecha que cree una publicación de blog. La función debe tomar un título y
un contenido como argumentos obligatorios. También puede tomar una lista de etiquetas opcional. Si 
no se proporcionan etiquetas, la publicación se creará sin ellas. */

let publicacion = (titulo, contenido, etiquetas=[]) =>{
    document.write("<h1>" + titulo + "</h1>" );
    document.write("<p>"+ contenido +"</p>");

}

publicacion("Mi Blog","Este blog es un ejemplo de como de vería. Esto es el contenido");

