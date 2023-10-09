<?php

include("./012Persona.php");

abstract class Trabajador extends Persona{
    private static float $sueldoTope = 3333.0; 
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
        return $this->edad > 21 && $this->calcularSueldo() > self::$sueldoTope;
    }

    public function anyadirTelefono($telefono):void{  //Añadimos telefonos al array
        $this->telefono[]=$telefono;
    }

    public function listarTelefonos():String{  //Devolvemos un string del array mediante el metodo implode
        return implode("," , $this->telefono);
    }

    public function getTelefonos(): array{  //Añadimos un getTelefonos para sacar el array
        return $this-> telefono;
    }

    public function vaciarTelefonos():void{
        $this->telefono = array();  //Vaciamos el array guardando uno vacío por encima
    }
    public static function getSueldoTope(): float{ //Gets y sets de la variable estática de sueldo tope
        return self::$sueldoTope;
    }

    public static function setSueldoTope($sueldoTope) :float{
        self::$sueldoTope=$sueldoTope;
    }
}