<?php
/*Tras leer los datos del tique de compra, enumera en una tabla los productos, con su precio en euros y pesetas,
 y finalmente, en una última fila, totalizar en ambas monedas.*/

$productos=["Leche"=>5.48 , "Galletas"=>1.50 , "Batidos"=>2.46];
$cantLeche=$_GET["Leche"];
$cantGalletas=$_GET["Galletas"];
$cantBat=$_GET["Batidos"];
$sumaEuros=0;
$sumaPes=0;
echo "<table border=1>";  //A través de echos damos forma a la tabla con la estructura html
echo "<tr>";
echo "<th>Producto</th>";
echo "<th>Precio Euros</th>";
echo "<th>Precio Pesetas</th>";
echo "<th>Cantidad</th>";
echo "<th>Total Euros</th>";
echo "<th>Total Pesetas</th>";
echo "</tr>";
foreach ($productos as $nombre => $precio){
    echo "<tr>";
    echo "<td> $nombre </td>"; 
    echo "<td> $precio </td>"; 
    $precioPes=$precio*166.39;
    echo "<td> $precioPes </td>"; 

    if ($nombre == "Leche") {
        echo "<td>$cantLeche</td>";
        $totalEuros = $precio * $cantLeche;
        $sumaEuros= $sumaEuros + $totalEuros;
        $totalPesetas = $precioPes * $cantLeche;
        $sumaPes= $sumaPes + $totalPesetas;
    } else if ($nombre == "Galletas") {
        echo "<td>$cantGalletas</td>";
        $totalEuros = $precio * $cantGalletas;
        $sumaEuros= $sumaEuros + $totalEuros;
        $totalPesetas = $precioPes * $cantGalletas;
        $sumaPes= $sumaPes + $totalPesetas;
    } else if ($nombre == "Batidos") {
        echo "<td>$cantBat</td>";
        $totalEuros = $precio * $cantBat;
        $sumaEuros= $sumaEuros + $totalEuros;
        $totalPesetas = $precioPes * $cantBat;
        $sumaPes= $sumaPes + $totalPesetas;
    }

    echo "<td>$totalEuros</td>";
    echo "<td>$totalPesetas</td>";
    echo "</tr>";
}
echo "<tr>";
echo "<td></td>";
echo "<td></td>";
echo "<td></td>";
echo "<td></td>";
echo "<td>Total Compra Euros</td>";
echo "<td>Total Compra Pesetas</td>";
echo "</tr>";
echo "<tr>";
echo "<td></td>";
echo "<td></td>";
echo "<td></td>";
echo "<td></td>";
echo "<td>$sumaEuros</td>";
echo "<td>$sumaPes</td>";
echo "</tr>";