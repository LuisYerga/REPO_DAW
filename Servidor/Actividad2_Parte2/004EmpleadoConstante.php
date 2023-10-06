<?php

/*Copia la clase del ejercicio anterior y modifícala. Añade una constante SUELDO_TOPE con 
el valor del sueldo que debe pagar impuestos, y modifica el código para utilizar la constante.*/

class Empleado{
    const SUELDO_TOPE = 3333;  //Declaramos la constante
    public function __construct (  // Declaramos nuestro constructor 
        protected String $nombre,
        protected String $apellidos,
        private array $telefono,
        protected ? float $sueldo=1000.0

    ){}
    
    public function getNombre(){  //Creamos getters y setters para manejar la información de los parámetros
        return $this-> nombre;
    }
    public function getApellido(){
        return $this-> apellidos;
    }
    public function getSueldo(){
        return $this-> sueldo;
    }

    public function setSueldo($sueldo){
        $this->sueldo=$sueldo;
        return $this;
    }

    public function getNombreCompleto() : String {  //Metodo que forma el nombre entero del empleado.Solo devuelve Strings
        return $this->nombre ." ". $this->apellidos;
    }

    public function debePagarImpuestos():bool{  //Metodo que devuelve un boolean true si el sueldo es mayor a la constante
        return $this->sueldo > self::SUELDO_TOPE;  //Accedemos a la const por haciendo referencia a la clase (Empleado:: == self::)
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
