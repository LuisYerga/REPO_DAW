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
        return $this->salario + ($this->salario * $this->edad) /100;
    }
    public function __toString ():String {  //Funcion toString con los datos del usuario
        $html= "<p>";
        $html .= $this->debePagarImpuestos() ? "El empleado " . $this->getNombreCompleto()." de edad " . $this->getEdad() . " debe pagar" : "El empleado " . $this->getNombreCompleto() . " de edad " . $this->getEdad() ." no debe pagar </br>";
        $html .= "El sueldo tope es " . $this->getSueldoTope() . "</br>";
        $html .= "La lista de telefonos del empleado es " . $this->listarTelefonos() . "</br>";
        $html .= "</p>";
        return $html;
    }
    public static function toHtml (Persona $p):String{
        if($p instanceof Gerente){ //Comprobamos que p pertenece también a Empleado
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
$gerente1 = new Gerente("Persona","Con Apellidos", 22 ,[674858483],1000);
$gerente1->anyadirTelefono(44);
echo $gerente1;

$html= Gerente::toHtml($gerente1);
echo $html;