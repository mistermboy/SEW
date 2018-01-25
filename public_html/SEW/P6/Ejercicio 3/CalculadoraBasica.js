// CalculadoraBasica.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class Calculadora {

            constructor(){
                this.expresion="";
                this.memory=0;
                this.operator=0;
                this.clean=0;
            }

            write(number){
                if(this.operator!=0){
                    this.operator = 2;
                }else if(this.clean==1){
                   this.expresion="";
                }
                this.clean=0;
                this.expresion += number;
                document.getElementById('salida').value = this.expresion;
                
            }
    
            writeZero(){
                if(this.expresion!=""){
                    this.clean=0;
                    this.expresion += 0;
                    document.getElementById('salida').value = this.expresion;
                }
            }
    
            writeOperator(operator){
                if(document.getElementById('salida').value!=""){
                    if(this.operator == 0){
                        this.expresion += operator;
                        document.getElementById('salida').value = this.expresion;
                        this.operator=1;
                    }else if(this.operator == 2) {
                        document.getElementById('salida').value = eval(this.expresion)+operator;
                        this.expresion=document.getElementById('salida').value;
                        this.operator=1;
                    }
                }
            }
    
    
            writeOperatorSign(operator){
                if(this.operator == 0){
                    this.expresion += operator;
                    document.getElementById('salida').value = this.expresion;
                    this.operator=1;
                }else if(this.operator == 1) {
                    this.expresion=this.expresion.slice(0,-1)+operator;
                    document.getElementById('salida').value = this.expresion;
                }
                else if(this.operator == 2) {
                    document.getElementById('salida').value = eval(this.expresion)+operator;
                    this.expresion=document.getElementById('salida').value;
                    this.operator=1;
                }
            }
            
    
            calc(){
                this.expresion=eval(this.expresion);
                document.getElementById('salida').value = this.expresion;
                this.clean=1;
                this.operator=0;
            }
    
           removeAll(){
                this.expresion="";
                this.operator=0;
                document.getElementById('salida').value = this.expresion;
            }
    
            sumMemory(){
                this.memory+=eval(document.getElementById('salida').value);
            }
        
            subtractMemory(){
                this.memory-=eval(document.getElementById('salida').value);
            }
    
            showMemory(){
                document.getElementById('salida').value = this.memory;
                this.expresion=this.memory;
            }
            
        
        }
var p = new Calculadora();

