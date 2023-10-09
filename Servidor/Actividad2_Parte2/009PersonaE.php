<?php

/*Copia las clases del ejercicio anterior y modifícalas.Añade en Persona un atributo edad
A la hora de saber si un empleado debe pagar impuestos, lo hará siempre y cuando tenga más de 21
años y dependa del valor de su sueldo. Modifica todo el código necesario para mostrar y/o editar la edad cuando sea necesario*/


class Persona{  //Creamos la clase persona con los atributos y metodos que heredará Empleado
    public function __construct(
        protected String $nombre,
        protected String $apellidos,
        protected int $edad
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

    public static function toHtml (Persona $p):String{
        $html = "<p>";  //Vamos guardando la estructura html en una variable para devolverla al final de la función
        $html .= "El nombre completo es " .$empleado1->getNombreCompleto(). "</br>";
        $html .= "Lista Telefonos";
        $html .= "<ol>"; //Lista ordenada
        $html.="</ol>";
        $html .= "</p>";
        return $html;
    }
}