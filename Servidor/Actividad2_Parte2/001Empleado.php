<?php

/*Crea una clase Empleado con su nombre, apellidos y sueldo. Encapsula las propiedades mediante getters/setters y añade métodos para:
Obtener su nombre completo → getNombreCompleto(): string
Que devuelva un booleano indicando si debe o no pagar impuestos (se pagan cuando el sueldo es superior a 3333€) → debePagarImpuestos(): bool
*/

class Empleado{
    public function __construct (  // Declaramos nuestro constructor 
        protected String $nombre,
        protected String $apellidos,
        protected float $sueldo
    ){}

    public function getNombre(){  //Creamos getters y setters para manejar la información de los parámetros
        return $this-> nombre;
    }
    public function setNombre($nombre){
        $this->nombre=$nombre;
        return $this;
    }
    public function getApellido(){
        return $this-> apellidos;
    }
    public function setApellido($apellidos){
        $this->apellidos=$apellidos;
        return $this;
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
}

$empleado1 = new Empleado("Luis", "Yerga Mayor", 1000);  //Creamos un nuevo empleado con sus datos
echo "El nombre completo del empleado es " . $empleado1->getNombreCompleto(). "</br>";  //Llamamos al metodo nombreCompleto

$impuestos = $empleado1->debePagarImpuestos() === true ? "El empleado " . $empleado1->getNombre() . " debe pagar" : "El empleado " . $empleado1->getNombre() . " no debe pagar";
//Guardamos un mensaje diferente dependiendo del valor del boolean que devuelva el metodo.
echo $impuestos . "</br>";
