<?php
include("./010PersonaS.php");//include para acceder al archivo con el padre

class Empleado extends Persona{  //Creamos la herencia de Persona en Empleado
    private static float $sueldoTope = 3333.0;  //Variable estática
    public function __construct (  // Declaramos nuestro constructor 
        String $nombre,
        String $apellidos,
        int $edad,
        private array $telefono,
        protected ? float $sueldo=1000.0
    ){
        parent::__construct($nombre, $apellidos, $edad);  //Llamamos a las propiedades heredadas
    }

    public function getSueldo(): float{
        return $this-> sueldo;
    }
    
    public function setSueldo($sueldo) :float{ 
        $this->sueldo=$sueldo;
        return $this;
    }

    public static function getSueldoTope(): float{ //Gets y sets de la variable estática de sueldo tope
        return self::$sueldoTope;
    }

    public static function setSueldoTope($sueldoTope) :float{
        self::$sueldoTope=$sueldoTope;
    }

    public function debePagarImpuestos():bool{  //Metodo que devuelve un boolean true si el sueldo es mayor a la constante
        return $this->edad > 21 && $this->sueldo > self::$sueldoTope;  //Accedemos a la const por haciendo referencia a la clase (Empleado:: == self::)
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
    }
        return $html;   
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



$empleado1 = new Empleado("Luis","Yerga Mayor", 22 ,[674858483],3000.0);  //Creamos un nuevo empleado con sus datos

$empleado1->anyadirTelefono(43); //Añadimos un telefono al array

$html1 = Empleado::toHtml($empleado1);  //Llamamos a la función estática toHtml y guardamos en la variable lo que devuelva. IMPORTANTE mostrar la lista antes de vaciar los teléfonos más abajo(Parece muy obvio a que si...)
echo $html1;

echo $empleado1;  //Invocamos a la función toString
