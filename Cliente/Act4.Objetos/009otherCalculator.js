"use strict";

/*Crear una función constructora Calculator que crea objetos con 3 métodos:
read() pide dos valores usando prompt y los guarda en las propiedades del objeto con los nombres a y b.
sum() devuelve la suma de estas propiedades.
mul() devuelve el producto de la multiplicación de estas propiedades.
Por ejemplo:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

function Calculator () { //Creamos la función calculadora con sus métodos
    this.read=function(){
        this.a= +prompt("Introduzca el valor a");
        this.b= +prompt("Introduzca el valor b");
    };
    this.sum=function(){
        return this.a + this.b;
    };
    this.mul=function(){
        return this.a * this.b;
    };
};

let calculadora = new Calculator(); 

calculadora.read();
alert("Suma=" + calculadora.sum());
alert("Mul=" + calculadora.mul());