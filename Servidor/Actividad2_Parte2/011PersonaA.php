<?php

/*Copia las clases del ejercicio anterior y modifícalas.
Transforma Persona a una clase abstracta donde su método estático toHtml(Persona $p) tenga que ser redefinido en todos sus hijos.*/

abstract class Persona{  //Creamos la clase persona con los atributos y metodos que heredará Empleado
    public function __construct(
        protected String $nombre,
        protected String $apellidos,
        protected int $edad  //añadimos el parametro edad
    ){}

    public function getNombre():String{  //Creamos getters y setters para manejar la información de los parámetros
        return $this-> nombre;
    }
    public function getApellido() :String{
        return $this-> apellidos;
    }
    public function getEdad() :int{  //Creamos su correspondiente get y set para mostrar y editar la edad
        return $this-> edad;
    }
    public function setEdad($edad) :int{ 
        $this->edad=$edad;
        return $this;
    }
    public function getNombreCompleto() : String {  //Metodo que forma el nombre entero del empleado.Solo devuelve Strings
        return $this->nombre ." ". $this->apellidos;
    }

    abstract public static function toHtml (Persona $p):String; //Clase abstracta que heradará Empleado para ser reescrita
}