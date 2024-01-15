"use strict";

let select= document.getElementById('genres'); //Seleccionamos el select

updateSelectedOption(); 

let newOption= new Option("Classic","classic"); //Nueva opción, primero el texto y luego el value
select.append(newOption);

newOption.selected =true; //Forzamos la selección

document.getElementById("genres").addEventListener("change", function() {  //Si el select sufre cambios llamamos a la función
    updateSelectedOption();
});

function updateSelectedOption(){ //La función selecciona la opción actual y la muestra en un alert
    let selectedOption = select[select.selectedIndex];  //Sacamos la opcion actual mediante el indice del objeto
    alert( selectedOption.value );  
}