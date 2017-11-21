// CalculadoraCientifica.js
// Informacion de asignatura
// Version 1.0. 16/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class Calculadora{

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
                this.clean=0;
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




class CalculadoraCientifica extends Calculadora{
                
            constructor(){
                super();
                this.howLong=0;
                this.isPi=0;
            }
            
            
             write(number){
                 if(this.clean==1){
                     this.expresion="";
                     this.howLong=0;
                 }else if(this.operator==1){
                      this.stack=this.expresion;
                      this.howLong=0;
                 }
                 this.clean=0;            
                 this.expresion += number;
                 document.getElementById('salida').value = this.expresion;
                 this.operator = 0;
                 if(number=="Math.PI"){
                     this.howLong+=7;
                     this.isPi=1;
                 }else{
                      this.howLong++;
                      this.isPi=0;
                 }  
                
            }
            
            
             writeOperator(operator){
                 if(document.getElementById('salida').value!=""){
                    if(this.operator == 0){
                        this.expresion += operator;
                        document.getElementById('salida').value = this.expresion;
                        this.operator=1;
                        this.clean=0;
                        this.isPi=0;
                    }
                }
             }
                 
            
            calcExpresion(operator){
                if(operator=="log"){
                    this.expresion=Math.log10(this.expresion);
                }else if(operator=="sin"){
                    this.expresion=Math.sin(this.expresion);
                }else if(operator=="cos"){
                    this.expresion=Math.cos(this.expresion);
                }else if(operator=="tan"){
                    this.expresion=Math.tan(this.expresion);
                }else if(operator=="√"){
                    this.expresion=Math.sqrt(this.expresion);    
                }
                else if(operator=="10^"){
                    this.expresion=Math.pow(10,this.expresion);    
                }
                else if(operator=="x^2"){
                    this.expresion=Math.pow(this.expresion,2);    
                }
                
                document.getElementById('salida').value = this.expresion;
                this.expresion="";
                
            } 
                 
    
            cleanCE(){
                if(this.operator!=1){
                    this.expresion=this.expresion.slice(0,-this.howLong);
                    document.getElementById('salida').value = this.expresion;
                    this.operator=1;
                }
            }
    
    
            removeLast(){
                if(this.operator==1){
                    this.operator=0;
                    this.howLong++;
                }
                if(this.isPi==1){
                    this.expresion=this.expresion.slice(0,-7);
                    document.getElementById('salida').value = this.expresion;
                    this.howLong-=7;
                }else{
                    this.expresion=this.expresion.slice(0,-1);
                    document.getElementById('salida').value = this.expresion;
                    this.howLong--;
                }
                
            }
    
              
        }



        var p = new CalculadoraCientifica();

