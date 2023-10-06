<?php

/*Copia la clase del ejercicio anterior y modifícala. Completa el siguiente método con una cadena HTML que muestre 
los datos de un empleado dentro de un párrafo y todos los teléfonos mediante una lista ordenada (para ello, deberás crear un getter para los teléfonos):

public static function toHtml(Empleado $emp): string*/

class Empleado{
    private static $sueldoTope = 3333;  //Variable estática
    public function __construct (  // Declaramos nuestro constructor 
        protected String $nombre,
        protected String $apellidos,
        private array $telefono,
        protected ? float $sueldo=1000.0
    ){}
    
    public function getNombre():String{  //Creamos getters y setters para manejar la información de los parámetros
        return $this-> nombre;
    }
    public function getApellido() :String{
        return $this-> apellidos;
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

    public function getNombreCompleto() : String {  //Metodo que forma el nombre entero del empleado.Solo devuelve Strings
        return $this->nombre ." ". $this->apellidos;
    }

    public function debePagarImpuestos():bool{  //Metodo que devuelve un boolean true si el sueldo es mayor a la constante
        return $this->sueldo > self::$sueldoTope;  //Accedemos a la const por haciendo referencia a la clase (Empleado:: == self::)
    }
    public function anyadirTelefono($telefono):void{  //Añadimos telefonos al array
        $this->telefono[]=$telefono;
    }

    public function listarTelefonos():String{  //Devolvemos un string del array mediante el metodo implode
        return implode("," , $this->telefono);
    }

    public function vaciarTelefonos():void{
        /*unset($this-> telefono);  Devuelve null, no sirve*/
        $this->telefono = array();  //Vaciamos el array guardando uno vacío por encima
    }
}

$empleado1 = new Empleado("Luis", "Yerga Mayor",[674858483]);  //Creamos un nuevo empleado con sus datos
echo "El nombre completo del empleado es " . $empleado1->getNombreCompleto(). "</br>";  //Llamamos al metodo nombreCompleto

$impuestos = $empleado1->debePagarImpuestos() ? "El empleado " . $empleado1->getNombre() . " debe pagar" : "El empleado " . $empleado1->getNombre() . " no debe pagar";
//Guardamos un mensaje diferente dependiendo del valor del boolean que devuelva el metodo.
echo $impuestos . "</br>";

$empleado1->anyadirTelefono(43); //Añadimos un telefono al array
echo "La lista de telefonos del empleado es " . $empleado1->listarTelefonos() . "</br>";   //Mostramos la lista de teléfonos del empleado
$empleado1->vaciarTelefonos();  //Llamamos al método para vaciar el array teléfonos
echo "La lista de telefonos del empleado es " . $empleado1->listarTelefonos() ."</br>"; //Comprobamos que se haya borrado

echo "El sueldo tope es " . $empleado1->getSueldoTope();  //Mostramos el sueldoTope accediendo por el get