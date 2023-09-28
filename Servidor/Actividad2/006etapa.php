<?php

/*A partir de una edad muestra por pantalla:
bebé si tiene menos de 3 años
niño si tiene entre 3 y 12 años
adolescente entre 13 y 17 años
adulto entre 18 y 66
jubilado a partir de 67
*/

$edad=$_GET["edad"];

echo ($edad<3) ? "Bebe" : ($edad>2 && $edad<13) ? "Niño" : ($edad>12 && $edad<18) ? "Adolescente" : ($edad>17 && $edad<67) ? "Adulto" : "Jubilado";