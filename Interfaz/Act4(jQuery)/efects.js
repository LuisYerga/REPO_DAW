"use strict";

$(document).ready(function(){
    $('.desplegar').click(function(){
        let $clicked= $(this);

        $('.element').each(function(){
            if($(this).is($clicked.next('.element'))){
                $(this).slideToggle();
            }else{
                $(this).slideUp();
            }
        });
    });
});

$('.ubicacion').click(function(){
    $('.element').slideUp();
    $('#maps').slideDown();
});

$('#oficina1').mouseenter(function(){
    $('#oficina1').animate({
        width: "55%"
    });
    $('#oficina2').hide();
});

$('#oficina1').mouseleave(function(){
    $('#oficina1').animate({
        width: "40%" 
    });
    $('#oficina2').show();
});

$('#oficina2').mouseover(function(){
    $('#oficina3').toggle();
    $('#oficina2').attr('src', 'img/cambiarFoto.jpeg');
    $('#oficina2').animate({
        width: "55%" 
    });
});

$('#oficina2').mouseout(function(){
    $('#oficina3').toggle();
    $('#oficina2').attr('src', 'img/oficinas2.jpeg');
    $('#oficina2').animate({
        width: "40%" 
    });
});

$(window).scroll(function(){ //Controlador de scroll de la página
    let winTop = $(window).scrollTop(); //Obtenemos la cantidad de scroll vertical desde el principio de la página
    if(winTop >= 15){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
});

$(document).ready(function(){
    function toggleLabelClass(input) {
        let label = input.siblings('label'); // Busca el label hermano del input
        label.toggleClass("negrita", input.is(":focus"));
    }

    $(".cambioFont :input").on({
        focusin: function () {
            toggleLabelClass($(this));
        },
        focusout: function () {
            toggleLabelClass($(this));
        }
    });
});