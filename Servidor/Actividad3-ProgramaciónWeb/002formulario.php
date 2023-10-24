<?php

/*Crea un formulario que solicite:
Nombre y apellidos. Email. URL página personal. Sexo (radio). Número de convivientes en el domicilio. Aficiones (checkboxes) – poner mínimo 4 valores.
Menú favorito (lista selección múltiple) – poner mínimo 4 valores.
Muestra los valores cargados en una tabla-resumen*/


$resultCheckbox = $_POST["checkbox"]; //Recibimos los datos y los guardamos en un array

echo "<table border=1>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Apellidos</th>";
echo "<th>Email</th>";
echo "<th>URL</th>";
echo "<th>Sexo</th>";
echo "<th>Nº convivientes</th>";
echo "<th>Aficiones</th>";
echo "<th>Menú</th>";
echo "</tr>";
echo "<tr>";
echo "<td>".$_POST["nombre"]."</td>"; //Recibimos los datos del form mediante post y los metemos a la tabla
echo "<td>".$_POST["apellidos"]."</td>";
echo "<td>".$_POST["email"]."</td>";
echo "<td>".$_POST["url"]."</td>";
echo "<td>".$_POST["sexo"]."</td>";
echo "<td>".$_POST["vivienda"]."</td>";
echo "<td>".implode(",", $resultCheckbox)."</td>"; //Juntamos el array con implode para mostrar en una sola celda de la tabla
echo "<td>". $_POST["menu"] ."</td>";
echo "</tr>";
echo "</table>";