"use strict";

let text = document.getElementById('texto'); //Seleccion del div texto

let textArea = null; //Dejamos declarado el textArea

text.onclick= function(){ //Dejamos un onclick para cuando se haga click en el div view
    if(text.className==="view"){
        changeState();
    }
};

function changeState(){ 
    let textArea = document.createElement("textarea"); //Creamos un elemento textArea 

    textArea.className= 'edit'; //Añadimos su clase

    textArea.value = text.innerHTML; //Copiamos el contenido del div al textArea

    text.replaceWith(textArea); //Remplazamos 

    textArea.focus(); //Aplicamos el foco al textArea

    textArea.addEventListener("keydown", function(event) { 
        if (event.key === "Enter") { //En caso de pulsar la tecla enter se llama a la función
            backState(textArea);
        }
      });

    textArea.addEventListener("blur", function() { //Si se cambia el foco del textArea se llama a la función
        backState(textArea);
    });
}

function backState(textArea){  //Función que cambia el textArea por el div anterior con la nueva información
    let showText= textArea.value;

    text.innerHTML = showText;

    textArea.replaceWith(text);

}