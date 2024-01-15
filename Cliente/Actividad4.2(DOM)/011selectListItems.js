"use strict";

ul.onclick = function(event) {  //Se ejecuta la función cuando se clica en la lista 
    if (event.target.tagName != "LI") return;  //Si lo que ha desencadenado la función no es un li se acaba la función

    if (event.ctrlKey || event.metaKey) { //Si se pulsa ctrl o cmd en mac se ejecuta otra función a si se clica sin pulsar
      toggleSelect(event.target); //Enviamos el li clicado
    } else {
      singleSelect(event.target);
    }

}

function toggleSelect(li) {  //Recibimos el li clicado
  li.classList.toggle('selected'); //Se cambia la clase a selected o se quita si la tiene
}

function singleSelect(li) {  //Recibimos el li clicado
  let selected = ul.querySelectorAll('.selected'); //Seleccionamos todos los li con la clase selected
  for(let elem of selected) { //Eliminamos todas las clases 
    elem.classList.remove('selected');
  }
  li.classList.add('selected'); //Añadimos el selected al li 
}