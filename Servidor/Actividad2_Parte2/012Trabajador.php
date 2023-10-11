<?php

include("./012Persona.php");

abstract class Trabajador extends Persona{
    private static float $sueldoTope = 3333.0; //Declaramos un sueldo tope
    public function __construct(
        String $nombre,
        String $apellidos,
        int $edad,
        private array $telefono //Añadimos telefono en trabajadores
    ){
        parent::__construct($nombre, $apellidos, $edad); //Recibimos los atributos de Persona
    }
    abstract public function calcularSueldo() : float; //Declaramos el método abstracto para usarse en Gerente y Empleado

    public function debePagarImpuestos():bool{  //Metodo que devuelve un boolean true si el sueldo es mayor a la constante
        return $this->edad > 21 && $this->calcularSueldo() > self::$sueldoTope;  //Cuando ejecutamos la función en uno de los hijos llamamos a la función calcular sueldo para poder ver lo que devuelve(el sueldo del empleado o gerente)
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

    abstract public static function toHtml (Persona $p):String; //Debemos poner el metodo toHtml en todos los hijos de Persona
       
    
}