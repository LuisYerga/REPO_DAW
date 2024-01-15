"use strict";

let botones= document.querySelectorAll('.pane');

for(let boton of botones){ //Iteramos por cada uno de los paneles
    boton.insertAdjacentHTML("afterbegin",'<button class="remove-button">[x]</button>'); //InnerHTML rescribe el div entero. Por tanto añadimos el boton con el metodo especificando su posicion

    boton.firstChild.onclick = () => boton.remove(); //Eliminamos el nodo del panel clicado
}



