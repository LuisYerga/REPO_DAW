"use strict";
let button = document.getElementById('butt');

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

//Ambas alertas se muestran al hacer click en el boton