<?php

/*Copia las clases del ejercicio anterior y modifícalas. Crea en Persona el método estático toHtml(Persona $p), 
y modifica en Empleado el mismo método toHtml(Persona $p), pero cambia la firma para que reciba una Persona como parámetro.
Para acceder a las propiedades del empleado con la persona que recibimos como parámetro, comprobaremos su tipo: */


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