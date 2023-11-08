<?php

/*Modifica el ejercicio anterior para que únicamente permita subir imágenes (comprueba la propiedad type del archivo subido). 
Si el usuario selecciona otro tipo de archivos, se le debe informar del error y permitir que suba un nuevo archivo.
En el caso de subir el tipo correcto, visualizar la imagen con el tamaño de anchura y altura recibido como parámetro.*/

if(isset($_FILES["archivo"])){
    $fichero= $_FILES["archivo"];
    $altura = isset($_POST["altura"]) ? $_POST["altura"] : '';
    $anchura = isset($_POST["anchura"]) ? $_POST["anchura"] : '';
}

$arrayExtensions=['jpg','png', 'gif', 'svg'];
$checkExtensions=pathinfo($fichero['name'], PATHINFO_EXTENSION);
if(in_array(strtolower($checkExtensions),$arrayExtensions)){
    $ruta='img/'.$fichero['name'];
    move_uploaded_file($fichero['tmp_name'], $ruta);
    if(isset($ruta) && file_exists($ruta)){
    echo '<img src="'.$ruta.'" alt="img" height="'.$altura.'" width="'.$anchura.'">';
    }else{
        echo "Error al mostra el archivo";
    }
}else{
    echo "Esto no es una imagen válida";
    ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
    <p>
        <label for="archivo"> Subir archivo </label>
        <input type="file"  name="archivo" id="archivo" required> <br> <!--Aceptamos solo imagenes-->
        </p>
        <p>
        <label for="altura">Altura</label>
        <input type="number" name="altura" id="altura" required> <br>
        </p>
        <p>
        <label for="anchura">Anchura</label>
        <input type="number" name="anchura" id="anchura" required> <br>
    </p>
        <input type="submit" value="Enviar"> <!--Enviamos el formulario-->
    </form>
    <?php
}

