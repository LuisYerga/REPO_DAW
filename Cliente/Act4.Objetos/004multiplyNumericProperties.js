"use strict";

/*Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2. Por ejemplo:
// Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};

multiplyNumeric(menu);

// Después de la llamada
menu = {
  width: 400,
  height: 600,
  title: "Mi menú"
};
Nota que multiplyNumeric no necesita devolver nada. Debe modificar el objeto en su lugar.
P.D. Usa typeof para verificar si hay un número aquí.*/

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
}

for(let key in menu){
    alert(menu[key]);
}

multiplyNumeric(menu);

function multiplyNumeric(menu){
    for (let key in menu){
        if(menu.hasOwnProperty(key) && typeof menu[key] === "number"){ //Comprobamos primero que menu tiene contenido. Comprobamos que la key sea un int para multiplicarla.Typeof devuelve el string "number".
            menu[key] *= 2; //Cogemos el valor y lo multiplicamos por 2, guardando el resultado
        }
    }
}

for(let key in menu){
    alert(menu[key]);
}