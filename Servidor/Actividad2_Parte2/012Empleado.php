<?php

include("./012Trabajador.php");
class Empleado{
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

}