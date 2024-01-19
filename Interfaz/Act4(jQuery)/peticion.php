<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    echo "Su mensaje se ha enviado con éxito"; //Si se recoge la petición se envia la respuesta
} else {
    echo "error";
}

?>