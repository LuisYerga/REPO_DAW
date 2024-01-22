"use strict"

//Declaramos en una variable el patrón que deben tener los nombres y los emails
let namePattern = "^[a-z A-Z Á-ÿ]{4,30}$";
let emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
let resultado;

//Funciones que checkean que los campos tienen su formato adecuado para retornar la respuesta a la función que los llama

function checkInput(idInput, pattern){
    if($(idInput).val().match(pattern)){ //Verificar que el input coincide con su patrón
        return true;
    }else{
        return false;
    }
}

function checkTextArea(idText){
    if($(idText).val().length >10 && $(idText).val().length<50){ //Verificar que el textarea tiene longitud mayor a 10 y menor que 50
        return true;
    }else{
        return false;
    }
}

function checkRadioBox(nameRadioBox){
    if($(nameRadioBox).is(":checked")){ //Verifica que el que se clicke la casilla de check
        return true;
    }else{
        return false;
    }
}

function checkOperation(idResultado, resultado){ //Recibimos el resultado de la operación generada y lo escrito por el usuario
    let valorIntroducido = parseFloat($(idResultado).val());
    if(!isNaN(valorIntroducido) && valorIntroducido === resultado){//Comprobamos que coincidan
        return true;
    }else{
        return false;
    }
}

$("#captcha").on("input", function(){ //Detectamos cuando se introduce contenido al input con id captcha
    let valorIntroducido = parseFloat($("#captcha").val());
    if(!isNaN(valorIntroducido) && valorIntroducido === resultado){ //Mostramos una imagen en funcion de si el resultado escrito es correcto o no
        $("#correct").removeClass("active"); 
        $("#incorrect").addClass("active");
    }else{
        $("#correct").addClass("active"); 
        $("#incorrect").removeClass("active");
    }
});


function captcha() { //Generamos 2 numeros aleatorios, guardamos el resultado de su suma e introducimos dichos numeros al html
    let num1= Math.floor(Math.random() * (1 - 11) + 11);
    let num2=Math.floor(Math.random() * (1 - 11) + 11);

    resultado = num1 + num2;

    let idOp=document.getElementById('operation');
    idOp.textContent= `${num1} +${num2} =`
}


function checkForm(idForm){
    $(idForm).on("submit" ,function (event){ //Cuando se trata de enviar el form
        event.preventDefault(); //Previene que se ejecute el evento antes de realizar la validación de la función

        if(checkInput("#nombre", namePattern)&& //Llamamos a las funciones pasando las id's de sus inputs y su patron
        checkInput("#email", emailPattern)&& 
        checkTextArea("#comentario") &&
        checkRadioBox("#terminos")&&
        checkOperation("#captcha", resultado)){ //Si todas retornan true se ejecuta
            let formData= $(this).serialize(); //Guardamos los datos del fromulario

            $.post("peticion.php", formData, function(response) { //Petición ajax con url al php, datos del form y el control de la respuesta del servidor
                if(response==="Su mensaje se ha enviado con éxito"){ //Mensaje recibido de php
                    $(idForm).slideUp(); //Quitamos el form
                    $("#mensaje h3").text(response); //Añadimos el mensaje al html
                    $("#mensaje").prepend("<p>El servidor dice</p>"); //Añadimos al principio
                    $("#mensaje").append("<p>¡Gracias por ponerse en contacto!</p>"); //Añadimos al final
                    let nuevoParrafo = $("<p></p>");
                    nuevoParrafo.attr("class", "aft"); //Añadimos un atributo para identificarlo
                    $("<p>Esto:</p>").insertBefore("#mensaje h3");
                    $(nuevoParrafo).insertAfter("#mensaje h3");
                    $("#mensaje .aft").html("¡Enhorabuena!");
                    $('#mensaje').slideDown(); //Mostramos el div mensaje
                }else {
                    console.log("Error al procesar el formulario en el servidor");
                }
            }).fail(function() { //Si se falla al enviar la petición
                console.log("Error en la petición AJAX");
            });

            /* Otra forma de aplicar ajax
            $.ajax({ 
                type: "POST",  
                url: "peticion.php", 
                data: formData,
                success: function(response){ //Respuesta del servidor
                    if(response==="Su mensaje se ha enviado con éxito"){
                        $(idForm).slideUp();
                        $("#mensaje h3").text(response);
                        $('#mensaje').slideDown();
                    }
                },
                error: function () {
                    console.log("Error en la petición AJAX");
                }
            });*/
        }else{
            console.log("Formulario no válido");
        }
    });
}



$(function (){ //Llama a la función de manera continua
    checkForm('#formi'); //Pasamos a la función la id del form
});

document.addEventListener("DOMContentLoaded", captcha );//Llamamos a la función cuando se carga el contenido de la página