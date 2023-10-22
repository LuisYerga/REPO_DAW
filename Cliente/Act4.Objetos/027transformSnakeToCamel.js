"use strict";

/*Escribe la función camelize(str) que convierta palabras separadas por _como “mi_cadena_corta” en palabras con mayúscula “miCadenaCorta”.
Esto sería: quitar todos los _ y que cada palabra después de _ comience con mayúscula. Ejemplos:
camelize("background_color") == 'backgroundColor';
camelize("list_style_image") == 'listStyleImage';
camelize("_webkit_transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo (join).*/

function camelize(str){
    let separador =str.split('_'); //Separamos en el array cada vez que se encuentre una barra baja
    for (let i=1; i<separador.length;i++){ //Empezamos en la segunda posición del array puesto que la primera no se pone en mayusculas
        separador[i]=separador[i].charAt(0).toUpperCase() + separador[i].slice(1); //Pasamos a mayusculas solo el primer caracter de la palabra en la que nos encontremos y cogemos el resto esta(slice)
    }
    let join= separador.join(''); //Join junta el array en un string sin ninguna separación
    return join;
}


alert(camelize("background_color")); 
alert(camelize("list_style_image"));  
alert(camelize("_webkit_transition"));