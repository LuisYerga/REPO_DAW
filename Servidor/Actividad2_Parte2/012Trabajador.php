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
    
    public static function toHtml (Persona $p):String{
        if($p instanceof Empleado){ //Comprobamos que p pertenece también a Empleado
        $html = "<p>";  //Vamos guardando la estructura html en una variable para devolverla al final de la función
        $html .= "El nombre completo es " .$p->getNombreCompleto(). " y su sueldo es de ". $p->getSueldo() . "</br>";
        $html .= "Lista Telefonos";
        $html .= "<ol>"; //Lista ordenada
        $listaTelf= $p->getTelefonos();  //Obtenemos el array de numeros
        foreach($listaTelf as $tlf){  //Recorremos uno a uno los elementos del array
            $html.= "<li>" .$tlf . "</li>";
        }
        $html.="</ol>";
        $html .= "</p>";
        return $html;  
        }else{  //Si no encuentra la función abstracta retornaremos este mensaje
            return "Imposible de procesar la petición";
        }
    }
}