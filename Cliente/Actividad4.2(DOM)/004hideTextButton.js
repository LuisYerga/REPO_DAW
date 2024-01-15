"use strict"

let quit= document.getElementById('desaparecer');
let div = document.getElementById('text');

quit.onclick=()=> div.classList.toggle('active');