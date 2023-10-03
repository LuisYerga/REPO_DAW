"use strict";

/*Reemplace las expresiones de función con funciones de flecha en el código a continuación:

function ask(question, yes, no) {

  if (confirm(question)) yes();

  else no();

}

ask(

  "Do you agree?",

  function() { alert("You agreed."); },

  function() { alert("You canceled the execution."); }

);*/

let ask = (quetion,yes,no) => {  //Función flecha que recibe los parametros de la función ask
    (confirm(quetion)) ? yes() : no(); //Mostramos la pregunta al usuario. Si contesta aceptar el valor devuelto es true y se llama a la función yes(), en caso contrario se llama a no()
};

ask(  //Función ask donde guardamos la pregunta y las funciones que ejecutan el mensaje de yes y de no
    "Do you agree?",
  
    () => alert("You agreed."),
  
    () => alert("You canceled the execution.")
);

