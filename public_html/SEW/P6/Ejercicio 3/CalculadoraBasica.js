// CalculadoraBasica.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class Pantalla {
   
     write(int number){
        document.getElementById('1').value = number;
    }
}
var p = new Pantalla();
p.write("4");
