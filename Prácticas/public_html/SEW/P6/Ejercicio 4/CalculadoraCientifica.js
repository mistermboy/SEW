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
                this.clean=1;
            }
        
        }




class CalculadoraCientifica extends Calculadora{
                
            constructor(){
                super();
                this.howLong=0;
                this.isPi=0;
                this.isNegative=0;
                this.isExp=0;
                this.blockOperatorSign=0;
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
                 
                 
                 if(this.isExp==1){
                     if(this.isNegative==0){
                         var ceros=1;
                         for(var i=0;i<number;i++){
                             ceros=ceros*10;
                         }
                         this.expresion=this.expresion*ceros;
                         document.getElementById('salida').value = this.expresion;
                         this.isExp=0;
                         this.clean=1;
                     }
                     
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
                        if(operator=="-"){
                            this.isNegative=1;
                        }else if(operator=="+"){
                            this.isNegative=0;
                        }
                    }
                }
             }
    
            writeOperatorSign(operator){
                if(this.blockOperatorSign==0){
                    super.writeOperatorSign(operator);
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
                this.clean=1;
                
            } 
    

             factorial() {
                this.calc();
                var limit = Math.round(this.expresion);
                var acum = 1; 
                for(var i=1; i<=limit; i++) {
                     acum=acum*i;
                }
                this.expresion=acum;
                document.getElementById('salida').value = this.expresion;
                clean=0;
             }

  
            cleanCE(){
                if(this.operator!=1){
                    this.expresion=this.expresion.slice(0,-this.howLong);
                    document.getElementById('salida').value = this.expresion;
                    this.operator=1;
                }else{
                    this.expresion=this.expresion.slice(0,-1);
                    document.getElementById('salida').value = this.expresion;
                    this.operator=0;
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
    
    
            changeSign(){
                 if(this.operator==0){
                    super.calc();
                    this.expresion = this.expresion * (-1);
                    document.getElementById('salida').value = this.expresion;
                 }
            }
    
    
            writeExpo(){
                document.getElementById('salida').value = this.expresion+",e+";
                this.isExp=1;
                this.operator=1;
                this.blockOperatorSign=1;
            }  
    
    
            clearMemory(){
                super.memory="";
            }
    
            replaceMemory(){           
                super.memory= document.getElementById('salida').value;
            }
            
        }



        var p = new CalculadoraCientifica();

