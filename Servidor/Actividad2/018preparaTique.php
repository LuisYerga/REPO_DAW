<?php
/*A partir de una cantidad de productos, leer el nombre y coste de la cantidad de 
productos indicados (la cantidad, se recibe mediante un parámetro GET vía URL). */

$productos=["Leche"=>5.48 , "Galletas"=>1.50 , "Batidos"=>2.46];

$cantLeche=$_GET["cant1"];
$cantGalletas=$_GET["cant2"];
$cantBat=$_GET["cant3"];

foreach($productos as $nombre => $precio){
    echo "Una unidad de $nombre cuesta $precio <br/>";
};
?>

<form action="018imprimeTique.php" method="get"> <!--Enviamos los datos a través de inputs ocultos al pulsar el botón-->
 <input type="hidden" id="Leche" name="Leche" value="<?php echo $cantLeche;?>" />
 <input type="hidden" id="Galletas" name="Galletas" value="<?php echo $cantGalletas;?>" />
 <input type="hidden" id="Batidos" name="Batidos" value="<?php echo $cantBat;?>" />
 <input type="submit" value="Hacer Tiquet" />
</form>