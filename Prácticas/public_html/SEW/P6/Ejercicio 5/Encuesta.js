// Encuesta.js
// Informacion de asignatura
// Version 1.0. 16/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class Encuesta{

        constructor(){
            this.blancos=false;
            this.preguntasBlancas=false;
            this.genero="";
            this.media=0;
            this.errores="";
            this.p1=0;
            this.p2=0;
            this.p3=0;
            this.p4=0;
            this.p5=0;
            this.p6=0;
            this.p7=0;
            this.p8=0;
            this.p9=0;
            this.p10=0;
        }
    
         checkCampos(){
             this.errores="";
             this.preguntasBlancas=false;
             this.checkNombre();
             this.checkApellido1();
             this.checkApellido2();
             this.checkEmail();
             this.checkPreguntas();
             if(this.blancos==true){
                this.errores+='\nAlguno de los campos obligatorios está en blanco';
                this.blancos=false;
             }
             
             if(this.preguntasBlancas==true){
               this.errores+='\nEs imprescindible responder a todas las preguntas';
               this.preguntasBlancas=false;
             }
             
             this.checkGenero();
             this.checkPreguntas();
             this.chekCondiciones();
             
             if(this.errores!=""){
                 this.showErrores();
             }else{
                 this.sendEmail();
                 event.returnValue=false;
             }   
         }
    
        checkNombre(){
            if(document.getElementById('campoNombre').value==""){
                 this.blancos=true;
             }
        }
    
         checkApellido1(){
                if(document.getElementById('campoApellido1').value==""){
                      this.blancos=true;
                 }
        }

         checkApellido2(){
                if(document.getElementById('campoApellido2').value==""){
                       this.blancos=true;
                 }
        }
    
        checkEmail(){
            if(document.getElementById('email').value==""){
                       this.blancos=true;
                 }
        }
    
        checkPreguntas(){
            if(this.p1==0 || this.p2==0 || this.p3==0 || this.p4==0 || this.p5==0 ||
              this.p6==0 || this.p7==0 || this.p8==0 || this.p9==0 || this.p10==0 ){
                    this.preguntasBlancas=true;
               }else{
                   this.preguntasBlancas=false;
                   this.calcularMedia();
               }        
        }
    
    
      chekCondiciones(){
          if(document.getElementById('conditions').checked == false) {
              this.errores+="\nDebes aceptar las condiciones de uso";
          }
        }
    
    
       checkGenero(){
            if(document.getElementById("radioMasc").checked == true){
                this.genero="Masculino";
            }
            else if(document.getElementById("radioFem").checked == true){
                this.genero="Femenino";
            }
            else if(document.getElementById("radioOtro").checked == true){
                this.genero="Otro";
            } 
        }
    
    
        reasignaValores(){
            this.p1=0;
            this.p2=0;
            this.p3=0;
            this.p4=0;
            this.p5=0;
            this.p6=0;
            this.p7=0;
            this.p8=0;
            this.p9=0;
            this.p10=0;
        }
    
        calcularMedia(){
            var expresion = "("+this.p1+"+"+this.p2+"+"+
                          this.p3+"+"+this.p4+"+"
                           +this.p5+"+"+this.p6+"+"+
                          this.p7+"+"+this.p8+"+"+
                          this.p9+"+"+this.p10+")/10";
            this.media=eval(expresion);
        }
    
        showErrores(){
            document.getElementById('oculto').value=this.errores;
            document.getElementById('oculto').style.display='block'; 
            this.errores="";
        }
    
        actualizaPreguntas(){
            var preguntas = document.forms[0];
            for (var i = 0; i < preguntas.radioPregunta1.length; i++) {
                if (preguntas.radioPregunta1[i].checked==true) {
                    this.p1=preguntas.radioPregunta1[i].value;
            
                }if(preguntas.radioPregunta2[i].checked==true) {
                    this.p2=preguntas.radioPregunta2[i].value;
                    
                }if(preguntas.radioPregunta3[i].checked==true) {
                    this.p3=preguntas.radioPregunta3[i].value;
                    
                }if(preguntas.radioPregunta4[i].checked==true) {
                    this.p4=preguntas.radioPregunta4[i].value;
                    
                }if(preguntas.radioPregunta5[i].checked==true) {
                    this.p5=preguntas.radioPregunta5[i].value;
                
                }if(preguntas.radioPregunta6[i].checked==true) {
                    this.p6=preguntas.radioPregunta6[i].value;
                
                }if(preguntas.radioPregunta7[i].checked==true) {
                    this.p7=preguntas.radioPregunta7[i].value;
                
                }if(preguntas.radioPregunta8[i].checked==true) {
                    this.p8=preguntas.radioPregunta8[i].value;
                
                }if(preguntas.radioPregunta9[i].checked==true) {
                    this.p9=preguntas.radioPregunta9[i].value;
                
                }if(preguntas.radioPregunta10[i].checked==true) {
                    this.p10=preguntas.radioPregunta10[i].value;
                
                }
            }
        }
    
    
        sendEmail(){
            document.getElementById('sFormulario').style.display='none';
            document.getElementById('sResultado').style.display='block';
            document.getElementById('result').value=this.media;
            window.location.href = "mailto:UO252406@uniovi.es";
        }
    
        start(){
            document.getElementById('sFormulario').style.display='block';
            document.getElementById('sResultado').style.display='none';
            this.restablecerCampos();
        }
    
    
        restablecerCampos(){
             this.reasignaValores();
            document.getElementById('campoNombre').value="";
            document.getElementById('campoApellido1').value="";
            document.getElementById('campoApellido2').value="";
            document.getElementById('email').value="";
            document.getElementById('coment').value="";
            
            
            var preguntas = document.forms[0];
            for (var i = 0; i < preguntas.radioPregunta1.length; i++) {
                if (preguntas.radioPregunta1[i].checked==true) {
                    preguntas.radioPregunta1[i].checked=false
            
                }if(preguntas.radioPregunta2[i].checked==true) {
                    preguntas.radioPregunta2[i].checked=false
                    
                }if(preguntas.radioPregunta3[i].checked==true) {
                    preguntas.radioPregunta3[i].checked=false
                    
                }if(preguntas.radioPregunta4[i].checked==true) {
                    preguntas.radioPregunta4[i].checked=false
                    
                }if(preguntas.radioPregunta5[i].checked==true) {
                    preguntas.radioPregunta5[i].checked=false
                
                }if(preguntas.radioPregunta6[i].checked==true) {
                    preguntas.radioPregunta6[i].checked=false
                
                }if(preguntas.radioPregunta7[i].checked==true) {
                    preguntas.radioPregunta7[i].checked=false
                
                }if(preguntas.radioPregunta8[i].checked==true) {
                    preguntas.radioPregunta8[i].checked=false
                
                }if(preguntas.radioPregunta9[i].checked==true) {
                    preguntas.radioPregunta9[i].checked=false
                
                }if(preguntas.radioPregunta10[i].checked==true) {
                    preguntas.radioPregunta10[i].checked=false;
                }
            }
            
         
             document.forms[1]['edades'].value='18';
             document.forms[1]['paises'].value='ES';
             document.forms[1]['ocupaciones'].value='P';
            
         
            document.getElementById('radioMasc').checked=true;
            document.getElementById('radioFem').checked=false;
            document.getElementById('radioOtro').checked=false;
            document.getElementById('conditions').checked=false;
            
            
            
            
        }


}

var e = new Encuesta();

