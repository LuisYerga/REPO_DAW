<?php

/*A partir del formulario anterior, introduce validaciones en HTML mediante el atributo required de los campos (uso los tipos adecuados para cada campo), y en 
comprueba los tipos de los datos y que cumplen los valores esperados (por ejemplo, en los checkboxes que los valores recogidos forman parte de todos los posibles).
Puedes probar a pasarle datos erróneos vía URL y comprobar su comportamiento. Tip: Investiga el uso de la función filter_var.*/

$nombre=$_POST["nombre"]; //Guardamos en variables los datos del formulario recibidos
$apellidos=$_POST["apellidos"];
$email=$_POST["email"];
$url=$_POST["url"];
$sexo=$_POST["sexo"];
$vivienda=$_POST["vivienda"];
$resultCheckbox = $_POST["checkbox"];
$menu=$_POST["menu"];


if(is_string($nombre)){ //Comprobamos que los parametros de los valores sean los correctos
    if(is_string($apellidos)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //Filter var comprueba si el formato del contenido es valido. En este caso busca que sea un correo(uso de @)
            if(filter_var($url, FILTER_VALIDATE_URL)){ //Comprobamos el formato de url
                if(is_string($sexo)){
                    if(filter_var($vivienda, FILTER_VALIDATE_INT)){ //Comprobamos que este sea un int
                        if(!empty($resultCheckbox)){
                            if(is_string($menu)){
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
                            }
                        }else{
                            echo "Fallo en el parametro menú";
                        }
                    }else{
                        echo "Fallo en el parametro vivienda";
                    }
                }else{
                    echo "Fallo en el parametro sexo";
                }
            }else{
                echo "Fallo en el parametro url";
            }
        }else{
            echo "Fallo en el parametro email";
        }
    }else{
        echo "Fallo en el parametro apellidos";
    }
}else{
    echo "Fallo en el parametro nombre";
}