<?php

include("./012Persona.php");

abstract class Trabajador extends Persona{
    public function __construct(
        String $nombre,
        String $apellidos,
        int $edad,
        private array $telefono
    ){
        parent::__construct($nombre, $apellidos, $edad);
    }
    abstract public function calcularSueldo() : float;

    public function debePagarImpuestos():bool{  //Metodo que devuelve un boolean true si el sueldo es mayor a la constante
        return $this->edad > 21 && $this->sueldo > self::$sueldoTope;
    }
}