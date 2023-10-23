"use strict";

/*¿Cuantos segundos faltan para el día de después de mañana? Crea una función getSecondsToAfterTomorrow() que devuelva la 
cantidad de segundos que faltan para el día después de mañana.

Por ejemplo, si ahora son las 23:00, entonces:
getSecondsToAfterTomorrow() == 3600 + todos los segundo de un día
P.D.: La función debe poder funcionar para cualquier día, sin valores fijos en el código”.*/

function getSecondsToAfterTomorrow(){
    let currentDate = new Date();
    let afterTomorrow= new Date();
    afterTomorrow.setDate(afterTomorrow.getDate()+2);
    afterTomorrow.setHours(0,0,0,0);
    let diferencia= Math.round((afterTomorrow-currentDate)/1000);
    return "Faltan " + diferencia +" segundos";
}

alert(getSecondsToAfterTomorrow());