<?php

class Empresa{
    public function __construct(
        protected String $nombre,
        protected String $direccion,
        protected array $trabajadores
    )

    public function getNombre():String{  //Creamos getters y setters para manejar la información de los parámetros
        return $this-> nombre;
    }
    public function getDireccion() :String{
        return $this-> direccion;
    }
    public function setNombre($nombre) :String{ 
        $this->nombre=$nombre;
        return $this;
    }
    public function setDireccion($direccion) :String{ 
        $this->direccion=$direccion;
        return $this;
    }
    public function anyadirTrabajor(Trabajador $t) : String {
        $this->trabajadores = $t;
        return $this;
    }
    public function listarTrabajadoresHtml():String{
        
    }
}