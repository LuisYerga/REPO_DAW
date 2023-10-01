"use strict"

/*Crear una función temporizador que reciba como parámetro los minutos y segundos de duración de éste, de modo, que cada segundo
mostrará por consola el tiempo que le queda al temporizador hasta llegar a 0. La función recibirá dos parámetros, con los minutos
y los segundos, pero en el caso que sólo le pasemos un parámetro, considerará que son los segundos desde donde comenzará la cuenta atrás. Por ejemplo:

temporizador(77);      // le pasamos 77 segundos

temporizador(2,50);   // le pasamos 2 minutos y 50 segundos */



function temporizador(segundos,minutos=0){  //Establecemos minutos a 0 como valor predeterminado en caso que no se le asigne valor
    let tiempo = minutos*60+segundos;  //Hacemos la conversión de minutos a segundos y los sumamos
    const intervalo = setInterval(function(){  //Creamos un intervalo que se ejecuta cada segundo
        if(tiempo<=0){
            clearInterval(intervalo);             //Si se alcanza el final del tiempo se limpia el intervalo y lanza un aviso
            alert("El tiempo ha acabado");
        }else{                                  //Mientras quede tiempo, separamos los minutos de los segundos y los mostramos por consola
            let minRestantes=Math.floor(tiempo/60); //Nos quedamos solo con el número entero
            let segRestantes=tiempo%60;             //Mientras que aquí nos quedamos con el resto entero
            let minBonito = String(minRestantes).padStart(2,"0"); //Covertimos los resultados a string para establecerle una logitud a la cadena, si esta longitud no se cumple se añadira un 0 para completar
            let segBonito = String(segRestantes).padStart(2,"0");  //De esta forma no se verá como que falta "1" segundo sino como "01"
            console.log(`El tiempo restante es de ${minBonito}:${segBonito}`);  //Mostramos por consola
            tiempo--; //Restamos un segundo al tiempo
        }
    }, 1000); //Indicador de cada cuanto se repite el intervalo (1000 milisegundos=1 segundo)
};

let minutos=1;
let segundos=30;

temporizador(100);

