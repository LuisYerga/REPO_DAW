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