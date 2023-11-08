<?php

/*Mediante el uso de cookies, informa al usuario de si es su primera visita, o si no lo es,
muestre su valor (valor de un contador). Además, debes permitir que el usuario
reinicialice su contador de visitas.*/

if (isset($_GET['reset']) && $_GET['reset'] === 'true') {
    $visitas = 0; // Reinicia el contador
    setcookie('contador', $visitas, time() + 365 * 24 * 60 * 60); 
}
if(isset($_COOKIE['contador'])){
    setcookie('contador', $_COOKIE['contador'] +1, time()+365*24*60*60);
    $mensaje='Número de visitas ' .$_COOKIE['contador'];
}else{
    setcookie('contador',1,time()+365*24*60*60);
    $mensaje='Bienvenido a nuestra página web';
}
echo $mensaje;
?>

<p><a href="?reset=true">Reiniciar contador de visitas</a></p>
