<?php

include("./012Trabajador.php");
class Empleado extends Trabajador{
    public function __construct(
        String $nombre,
        String $apellidos,
        int $edad,
        array $telefono,
        private int $horasTrabajadas,
        private float $precioPorHora
    ){
        parent::__construct($nombre, $apellidos, $edad, $telefono);
    }
    
    public function calcularSueldo() :float{
        return $horasTrabajadas * $precioPorHora;
    }

    public function __toString ():String {  //Funcion toString con los datos del usuario
        $html= "<p>";
        $html .= $this->debePagarImpuestos() ? "El empleado " . $this->getNombre() . " debe pagar" : "El empleado " . $this->getNombre() . " no debe pagar </br>";
        $html .= "El sueldo tope es " . $this->getSueldoTope() . "</br>";
        $html .= "La lista de telefonos del empleado es " . $this->listarTelefonos() . "</br>";
        $html .= "</p>";
        return $html;
    }
}

$empleado1 = new Empleado("Luis","Yerga Mayor", 22 ,[674858483],3000.0);
$empleado1->anyadirTelefono(43);
echo $empleado1;