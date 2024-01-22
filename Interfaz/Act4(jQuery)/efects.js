"use strict"

$(document).ready(function(){ //Función acordeón
    $('.desplegar').click(function(){ //Al hacer click 
        let $clicked= $(this); //Guardamos cual ha sido clicado

        $('.element').each(function(){ //Iteramos por los div element
            if($(this).is($clicked.next('.element'))){ //Si el actual element es el que va detras del desplegar clicado
                $(this).slideToggle();
            }else{
                $(this).slideUp();
            }
        });
    });
});

$('.ubicacion').click(function(){ //Si se clica ubicación en el footer se despliega en el acordeon
    $('.element').slideUp();
    $('#maps').slideDown();
});

//Funciones de raton

$('#oficina1').mouseenter(function(){ 
    $('#oficina1').animate({ //Aumentamos su tamaño
        width: "55%"
    });
    $('#oficina2').hide(); //Escondemos la imagen de abajo
});

$('#oficina1').mouseleave(function(){
    $('#oficina1').animate({
        width: "40%" 
    });
    $('#oficina2').show();
});

$('#oficina2').mouseover(function(){
    $('#oficina3').toggle(); //Escondemos la imagen de abajo
    $('#oficina2').attr('src', 'img/cambiarFoto.jpeg'); //Cambiamos la imagen
    $('#oficina2').animate({
        width: "55%" 
    });
});

$('#oficina2').mouseout(function(){
    $('#oficina3').toggle();
    $('#oficina2').attr('src', 'img/oficinas2.jpeg');//Devolvemos la imagen anterior
    $('#oficina2').animate({
        width: "40%" 
    });
});

$(window).scroll(function(){ //Controlador de scroll de la página
    let winTop = $(window).scrollTop(); //Obtenemos la cantidad de scroll vertical desde el principio de la página
    if(winTop >= 15){ //Si el scroll es mayor de 15 se cambia la clase
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
});

$(document).ready(function(){
    function toggleLabelClass(input) {
        let label = input.siblings('label'); // Busca el label hermano del input con foco
        label.toggleClass("negrita"); //Activamos la clase negrita
    }

    $(".cambioFont :input").on({ //En los inputs(incluye textarea) con la clase
        focusin: function () { //Si tiene el foco
            toggleLabelClass($(this)); //Llamamos a la función enviando que input tiene el foco
        },
        focusout: function () {//Si pierde el foco
            toggleLabelClass($(this));
        }
    });
});


$(window).resize(function(){  //Si la ventana se redimensiona
    if($(window).width()<=992){ //Si el tamaño de la ventana es menor cambiamos la disposición de las col
        $('#col-terminos').removeClass("col-md-5");
        $('#col-terminos').addClass("col-md-3");
        $('#col-captcha').removeClass("col-md-7");
        $('#col-captcha').addClass("col-md-9");
    }else{
        $('#col-terminos').addClass("col-md-5");
        $('#col-terminos').removeClass("col-md-3");
        $('#col-captcha').addClass("col-md-7");
        $('#col-captcha').removeClass("col-md-9");
    }

});

