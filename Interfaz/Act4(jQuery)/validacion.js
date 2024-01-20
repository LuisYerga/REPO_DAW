"use strict"

let namePattern = "^[a-z A-Z Á-ÿ]{4,30}$";
let emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
let resultado;

function checkInput(idInput, pattern){
    if($(idInput).val().match(pattern)){

        return true;
    }else{

        return false;
    }
}

function checkTextArea(idText){
    if($(idText).val().length >12){

        return true;
    }else{
        return false;
    }
}

function checkRadioBox(nameRadioBox){
    if($(nameRadioBox).is(":checked")){

        return true;
    }else{

        return false;
    }
}

function checkOperation(idResultado, resultado){
    let valorIntroducido = parseFloat($(idResultado).val());
    console.log(valorIntroducido);
    if(!isNaN(valorIntroducido) && valorIntroducido === resultado){
        return true;
    }else{
        return false;
    }
}

$("#captcha").on("input", function(){
    let valorIntroducido = parseFloat($("#captcha").val());
    console.log(valorIntroducido);
    if(!isNaN(valorIntroducido) && valorIntroducido === resultado){
        $("#correct").removeClass("active"); 
        $("#incorrect").addClass("active");
    }else{
        $("#correct").addClass("active"); 
        $("#incorrect").removeClass("active");
    }
});


function captcha() {
    let num1= Math.floor(Math.random() * (1 - 11) + 11);
    let num2=Math.floor(Math.random() * (1 - 11) + 11);

    resultado = num1 + num2;

    let idOp=document.getElementById('operation');
    idOp.textContent= `${num1} +${num2} =`
}


function checkForm(idForm){
    $(idForm).on("submit" ,function (event){
        event.preventDefault();

        if(checkInput("#nombre", namePattern)&&
        checkInput("#email", emailPattern)&&
        checkTextArea("#comentario") &&
        checkRadioBox("#terminos")&&
        checkOperation("#captcha", resultado)){
            let formData= $(this).serialize(); //Guardamos los datos del fromulario

            $.post("peticion.php", formData, function(response) { //Petición ajax con url al php, datos del form y el control de la respuesta del servidor
                if(response==="Su mensaje se ha enviado con éxito"){ //Mensaje recibido de php
                    $(idForm).slideUp();
                    $("#mensaje h3").text(response); //Añadimos el mensaje al html
                    $("#mensaje").prepend("<p>El servidor dice:</p>");
                    $("#mensaje").append("<p>¡Gracias por ponerse en contacto!</p>");
                    $("<p class='aft'></p>").insertAfter("#mensaje h3");
                    $("#mensaje .aft").html("¡Enhorabuena!");
                    $('#mensaje').slideDown();
                }else {
                    console.log("Error al procesar el formulario en el servidor");
                }
            }).fail(function() { //Si se falla al enviar la petición
                console.log("Error en la petición AJAX");
            });

            /*
            $.ajax({  //Petición Ajax simplificada
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



$(function (){
    checkForm('#formi');
});

document.addEventListener("DOMContentLoaded", captcha );