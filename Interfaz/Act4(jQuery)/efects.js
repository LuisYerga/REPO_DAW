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

$('#galeria').mouseenter(function(){
    $('#galeria').animate({
        width: "600px" 
    });
});

$('#galeria').mouseleave(function(){
    $('#galeria').animate({
        width: "300px" 
    });
});