<?php

/*Copia la clase del ejercicio anterior y modifícala. Elimina los setters de nombre y apellidos, de manera que 
dichos datos se asignan mediante el constructor (utiliza la sintaxis de PHP8). Si el constructor recibe un tercer parámetro, 
será el sueldo del Empleado. Si no, se le asignará 1000€ como sueldo inicial.*/

class Empleado{
    public function __construct (  // Declaramos nuestro constructor 
        protected String $nombre,
        protected String $apellidos,
        protected float $sueldo=1000.0,
        private array $telefono
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

    public function debePagarImpuestos():bool{  //Metodo que devuelve un boolean true si el sueldo es mayor al numero o false en caso contrario
        return $this->sueldo > 3333;
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

$empleado1 = new Empleado("Luis", "Yerga Mayor", 1000,[674858483]);  //Creamos un nuevo empleado con sus datos
echo "El nombre completo del empleado es " . $empleado1->getNombreCompleto(). "</br>";  //Llamamos al metodo nombreCompleto

$impuestos = $empleado1->debePagarImpuestos() ? "El empleado " . $empleado1->getNombre() . " debe pagar" : "El empleado " . $empleado1->getNombre() . " no debe pagar";
//Guardamos un mensaje diferente dependiendo del valor del boolean que devuelva el metodo.
echo $impuestos . "</br>";

$empleado1->anyadirTelefono(43); //Añadimos un telefono al array
echo "La lista de telefonos del empleado es " . $empleado1->listarTelefonos() . "</br>";   //Mostramos la lista de teléfonos del empleado
$empleado1->vaciarTelefonos();  //Llamamos al método para vaciar el array teléfonos
echo "La lista de telefonos del empleado es " . $empleado1->listarTelefonos() ."</br>"; //Comprobamos que se haya borrado

