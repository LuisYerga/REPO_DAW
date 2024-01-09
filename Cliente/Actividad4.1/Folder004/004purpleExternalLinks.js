"use strict";

let enlaces= document.querySelectorAll('a');  //Seleccionamos todos los enlaces

enlaces.forEach(enlace => {  //Iteramos por los enlaces
    let href= enlace.getAttribute('href');  //Guardamos los atributos href

    if(href && href.includes('://') && !href.startsWith('http://internal.com')){ //Verificamos que tenga atributo href y que este cumpla los requisitos para cambiar el style
        enlace.style.color='purple';
    }
});