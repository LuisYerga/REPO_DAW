<?php

/*Modifica el ejercicio anterior para almacenar el color de fondo en la sesión y no
emplear cookies. Además, debe contener un enlace al siguiente archivo
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambio de color</title>
</head>
<body>
    <h1>Seleccione un color de fondo:</h1>
    <form method="post">
        <select name="colorSelector">
            <option value="white">Blanco</option>
            <option value="lightblue">Azul Claro</option>
            <option value="lightgreen">Verde Claro</option>
            <option value="lightpink">Rosa Claro</option>
        </select>
        <input type="submit" name="submit" value="Cambiar Color">
    </form>

    <?php 
    if(isset($_POST['colorSelector'])){
        $selector=$_POST['colorSelector'];
        setcookie("selector",$selector, time() +60*60*24);
        echo "<style>body { background-color: $selector; }</style>";
    }
    if (isset($_COOKIE['selector']) && !isset($_POST['colorSelector'])) {
        $colorFondo = $_COOKIE['selector'];
        echo "<style>body { background-color: $colorFondo; }</style>";
    }
    ?>
</body>
</html>