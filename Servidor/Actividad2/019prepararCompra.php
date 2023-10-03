<?php
 include '019encabezado.php';  //Enlazamos con el php que contiene nuestro header

$productos=["Leche"=>5.48 , "Galletas"=>1.50 , "Batidos"=>2.46];

$cantLeche=$_GET["cant1"];  //recibimos la cantidad por la URL
$cantGalletas=$_GET["cant2"];
$cantBat=$_GET["cant3"];

foreach($productos as $nombre => $precio){  //Mostramos los productos con su precio
    echo "Una unidad de $nombre cuesta $precio <br/>";
};
?>

<form action="019listaCompra.php" method="get"> <!--Enviamos los valores al php de forma oculta-->
 <input type="hidden" id="Leche" name="Leche" value="<?php echo $cantLeche;?>" />
 <input type="hidden" id="Galletas" name="Galletas" value="<?php echo $cantGalletas;?>" />
 <input type="hidden" id="Batidos" name="Batidos" value="<?php echo $cantBat;?>" />
 <input type="submit" value="Hacer Tiquet" />
</form>


<?php include '019footter.php';  //Enlazamos con nuestro php footer
?> 