"use strict";

function showNotification({top, right , className, html}) { 
    let notification= document.createElement('div'); //Creamos div 

    notification.className = "notification"; //Añadimos como class notificación
    if (className) { //Al detectar la existencia de una className(welcome), añade esta sin sobreescribirla
      notification.classList.add(className);
    }

    notification.style.top = top + 'px'; //Añadimos los estilos
    notification.style.right = right + 'px';

    notification.innerHTML = html;  //Añadimos nuestro mensaje (Hellow) al div
    document.body.append(notification); //Aplicamos el div al html
    setTimeout(()=> notification.remove(), 1500); // Sacamos el div al cumplirse el tiempo
}

showNotification({ //Pasamos los parametros de la posición, el contenido y la clase
  top: 10,  
  right: 10,
  html: 'Hello ',
  className: "welcome"
})
