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

function enableSubmit(idForm) {
    $(idForm + " button.submit").removeAttr("disabled");
}
  
function disableSubmit(idForm) {
    $(idForm + " button.submit").attr("disabled", "disabled");
}


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
        //this.submit();
        $(this).slideUp();
        $('#mensaje').slideDown();
        }else{
            console.log("Formulario no válido");
        }
    });
}



$(function (){
    checkForm('#formi');
});

document.addEventListener("DOMContentLoaded", captcha );