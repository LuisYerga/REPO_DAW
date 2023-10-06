<?php

/*Copia la clase del ejercicio anterior y modifícala. Elimina los setters de nombre y apellidos, de manera que 
dichos datos se asignan mediante el constructor (utiliza la sintaxis de PHP8). Si el constructor recibe un tercer parámetro, 
será el sueldo del Empleado. Si no, se le asignará 1000€ como sueldo inicial.*/

class Empleado{
    public function __construct (  // Declaramos nuestro constructor 
        protected String $nombre,
        protected String $apellidos,
        protected float $sueldo=100.0
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

    public function getNombreCompleto() : String {  //Metodo que forma el nombre entero del empleado.Solo devuelve Strings
        return $this->nombre ." ". $this->apellidos;
    }
}

$empleado1 = new Empleado("Luis", "Yerga Mayor", 2000.0);  //Creamos un nuevo empleado con sus datos
echo "El nombre completo del empleado es " . $empleado1->getNombreCompleto(). " con sueldo ". $empleado1 -> getSueldo() . "</br>";  //Llamamos al metodo nombreCompleto