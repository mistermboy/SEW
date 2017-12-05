// Encuesta.js
// Informacion de asignatura
// Version 1.0. 16/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class Encuesta{

        constructor(){
        }
    
         checkCampos(){
             if(document.getElementsByClassName('campo').value==""){
                 document.getElementsByClassName('campo').value="funciona";
             }
         }
        
}

var e = new Encuesta();

