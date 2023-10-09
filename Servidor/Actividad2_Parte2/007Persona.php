<?php

/*Copia la clase del ejercicio anterior en 307Empleado.php y modifícala.Crea una clase Persona que sea
padre de Empleado, de manera que Persona contenga el nombre y los apellidos, y en Empleado quede el salario y los teléfonos.*/

class Persona{  //Creamos la clase persona con los atributos y metodos que heredará Empleado
    public function __construct(
        protected String $nombre,
        protected String $apellidos
    ){}

    public function getNombre():String{  //Creamos getters y setters para manejar la información de los parámetros
        return $this-> nombre;
    }
    public function getApellido() :String{
        return $this-> apellidos;
    }
    public function getNombreCompleto() : String {  //Metodo que forma el nombre entero del empleado.Solo devuelve Strings
        return $this->nombre ." ". $this->apellidos;
    }
}
