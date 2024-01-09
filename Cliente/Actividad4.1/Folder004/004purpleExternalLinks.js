"use strict";

let enlaces= document.querySelectorAll('a');

enlaces.forEach(enlace => {
    let href= enlace.getAttribute('href');

    if(href && href.includes('://') && !href.startsWith('http://internal.com')){
        enlace.style.color='purple';
    }
});