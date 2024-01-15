"use strict";

function runOnKeys(funcion, key1, key2) {
  let teclasPulsadas = new Set();  //Creacion del objeto set. Este no permite la duplicación de elementos

  function comprobar(){
    if (teclasPulsadas.has(key1) && teclasPulsadas.has(key2)) {  //Si el set contiene ambas teclas se ejecuta
      teclasPulsadas.clear(); 
      /*Eliminamos el registro de teclas del set. Hacemos esto puesto que al llamar a la función y saltar el alert no se 
      detectan las teclas levantadas y se quedan en el set. Por ello al pulsar cualquier tecla la proxima vez las detectará y pasara el if aun sin pulsar las teclas*/
      funcion(); //Ejecutamos la función alert
    }
  };

  document.addEventListener("keydown", event => {  //Funcion en la que se pulsa una tecla
    teclasPulsadas.add(event.code);  //Añadimos al set la tecla que se ha pulsado
    comprobar(); //Llamamos a la funcion comprobar
  });

  document.addEventListener("keyup", event => { //Función en la que se deja de pulsar
      teclasPulsadas.delete(event.code); //Eliminamos las teclas que se dejen de pulsar
  });

}
  

runOnKeys(
  () => alert("Hello!"),
  "KeyQ",
  "KeyW"
)

//Otra versión también valida:
/*
function runOnKeys(func, key1,key2) {
    let teclas= [key1, key2]; //Guardamos en un array las teclas
    let teclasPulsadas = new Set();

    document.addEventListener('keydown', function(event) { //Ejecutamos si se presiona una tecla
      teclasPulsadas.add(event.code); //Añadimos la tecla pulsada a el set

      for (let tecla of teclas) { //Recorremos el array
        if (!teclasPulsadas.has(tecla)) {  //Si la tecla no esta en el array se sale de la funcion mediante el return
          return;
        }
      }
      
      teclasPulsadas.clear(); //Si se pasa el filtro del for se elimina el registro del set

      func(); //Llamamos a la funcion con el alert
    });

    document.addEventListener("keyup", event => { //Función en la que se deja de pulsar
        teclasPulsadas.delete(event.code); //Eliminamos las teclas que se dejen de pulsar
    });
  }

*/