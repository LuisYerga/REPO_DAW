<?php

include("./013Trabajador.php");

class Empresa{
    protected array $trabajadores=[];
    public function __construct(
        protected String $nombre,
        protected String $direccion
    ){}

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
        $this->trabajadores = $t->getNombreCompleto();
        return $this;
    }
    public function listarTrabajadoresHtml():String{
        $html= "<p>Lista de Trabajadores</p>";
        foreach($this->trabajadores as $trabajador){
            $html.= Trabajador::toHtml($trabajador);
        }
        return $html;
    }

    public function getCosteNominas():float{
        $costeNominas;
        foreach($this->trabajadores as $trabajador){
            $costeNominas+= $trabajador->calcularSueldo();
        }
    }
}

$empresa = new Empresa("Empresa","Calle falsa");
