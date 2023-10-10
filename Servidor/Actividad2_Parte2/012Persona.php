<?php

/*Copia las clases del ejercicio anterior y modifícalas.Cambia la estructura de clases conforme al gráfico respetando todos los 
métodos que ya están hechos. Trabajador es una clase abstracta que ahora almacena los teléfonos y donde calcularSueldo es un método abstracto de manera que:
El sueldo de un Empleado se calcula a partir de las horas trabajadas y lo que cobra por hora. Para los Gerentes, su sueldo se incrementa porcentualmente 
en base a su edad: salario + salario*edad/100*/

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
    public static function toHtml (Persona $p):String{
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
        return $html;  
    }
}