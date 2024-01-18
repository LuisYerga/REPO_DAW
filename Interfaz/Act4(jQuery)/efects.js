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

$('#oficina1').mouseenter(function(){
    $('#oficina1').animate({
        width: "600px"
    });
});

$('#oficina1').mouseleave(function(){
    $('#oficina1').animate({
        width: "300px" 
    });
});

$('#oficina2').mouseover(function(){
    $('#oficina2').animate({
        width: "600px" 
    });
});

$('#oficina2').mouseout(function(){
    $('#oficina2').animate({
        width: "300px" 
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