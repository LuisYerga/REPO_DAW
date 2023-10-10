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
        parent::__construct($nombre, $apellidos, $edad, $telefono); //Recibimos todos los datos de Persona y Trabajador
    }
    
    public function calcularSueldo() :float{ //Reformulamos la función heredada
        return $this->horasTrabajadas * $this->precioPorHora;
    }

    public function __toString ():String {  //Funcion toString con los datos del usuario
        $html= "<p>";
        $html .= $this->debePagarImpuestos() ? "El empleado " . $this->getNombreCompleto() ." de edad " . $this->getEdad() . " debe pagar </br>" : "El empleado " . $this->getNombreCompleto() ." de edad " . $this->getEdad() . " no debe pagar </br>";
        $html .= "El sueldo tope es " . $this->getSueldoTope() . "</br>";
        $html .= "La lista de telefonos del empleado es " . $this->listarTelefonos() . "</br>";
        $html .= "</p>";
        return $html;
    }
    public static function toHtml (Persona $p):String{
        if($p instanceof Empleado){ //Comprobamos que p pertenece también a Empleado
        $html = "<p>";  //Vamos guardando la estructura html en una variable para devolverla al final de la función
        $html .= "El nombre completo es " .$p->getNombreCompleto(). " y su sueldo es de ". $p->calcularSueldo() . "</br>";
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

$empleado1 = new Empleado("Luis","Yerga Mayor", 20 ,[674858483],33,100.5);
$empleado1->anyadirTelefono(43);
echo $empleado1;

$html= Empleado::toHtml($empleado1);
echo $html;