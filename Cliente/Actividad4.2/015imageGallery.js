"use strict";

function changeImage(thumbnail) { 
    let mainImage = document.getElementById('mainImage'); //Guardamos la imagen establecida como principal
    let guardada= mainImage.src; //Guardamos su ruta
    mainImage.src = thumbnail.src; //Intercambiamos las rutas src entre la principal y la clicada
    thumbnail.src=guardada;
}