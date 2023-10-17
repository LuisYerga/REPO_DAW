"use strict";

/*Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
let calculator = {
  // ... tu código ...
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

let calculator = { //Creamos el objeto
    a:0,
    b:0,
    read :function(){ //Creamos sus funciones
        this.a = +prompt("Introduce un valor a"); //Accedemos a los atributos a y b y los sobreescribimos con lo que se introduzca. (+ lo pasa directamente a int)
        this.b = +prompt("Introduce un valor b");
    },

    sum : function(){  //Devolvemos la suma y la multiplicación de los atributos
        return this.a + this.b;
    },

    mul : function(){
        return this.a * this.b;
    }
}

calculator.read(); //Llamamos a las funciones dentro del objeto
alert( calculator.sum() );
alert( calculator.mul() );