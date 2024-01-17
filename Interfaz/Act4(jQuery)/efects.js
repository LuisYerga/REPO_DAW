"use strict";

let desplegable= document.querySelector('.element');
let desplegar= document.querySelector('.desplegar');

/*$(document).ready(function(){
    $('.desplegar').click(function(){
        $('.element').not($(this).next('.element')).slideUp();;
        $(this).next('.element').slideToggle();
    });
});*/

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