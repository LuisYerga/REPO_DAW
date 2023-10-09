<?php

include("./012Trabajador.php");
class Gerente extends Trabajador{
    public function __construct(
        String $nombre,
        String $apellidos,
        int $edad,
        array $telefono,
        private int $salario
    ){
        parent::__construct($nombre, $apellidos, $edad, $telefono);
    }
    
    public function calcularSueldo() :float{
        return $salario + ($salario * $this->$edad) /100;
    }
}