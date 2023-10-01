"use strict";

/*¿Es "else" requerido?

La siguiente función devuelve true si el parámetro age es mayor a 18. De lo contrario, solicita una confirmación y devuelve su resultado:

function checkAge(age) {

  if (age > 18) {

    return true;

  } else {

    // ...

    return confirm('¿Tus padres te permitieron?');

  }

}

¿Funcionará la función de manera diferente si se borra else? ¿Hay alguna diferencia en el comportamiento de estas dos variantes? */

/* En caso de borrar el else, si la edad es menor de 18 no se solicitará ninguna confiramción al usuario sobre si sus padres se lo han permitido.
Suponemos entonces que el usuario no podrá ingresar al contenido de ninguna manera si es menor, a diferencia que en el else  en el que si este contestaba que tenía permiso se
retornaba también un true que daría acceso*/