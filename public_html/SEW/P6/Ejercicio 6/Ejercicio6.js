// Ejercicio6.js
// Informacion de asignatura
// Version 1.0. 06/12/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class TresEnRaya{

        constructor(){
            this.turn="P1";
            this.casillas= new Array(3);
            this.createArray();
            this.p1Win=false;
            this.p2Win=false;
            this.contJugadas=0;
        }
    
        play(btn){
            this.contJugadas++;
            if(this.turn=="P1"){
                 document.getElementById(btn).value="X";
                 document.getElementById(btn).disabled=true;
                 this.casillas[this.returnRowPosition(btn)][this.returnColumnPosition(btn)]=1;
                 this.turn="P2";
            }else{
                document.getElementById(btn).value="O";
                document.getElementById(btn).disabled=true;
                this.casillas[this.returnRowPosition(btn)][this.returnColumnPosition(btn)]=2;
                 this.turn="P1";
            }
            this.changePlayer();
            this.checkWinner();
           
            
        }
    
        createArray(){
            for(var i = 0; i < 3; i++) {
                this.casillas[i] = new Array(3);
                for(var j=0; j< 3; j++){
                    this.casillas[i][j]=0;
                }
            }
        }
    

        returnRowPosition(btn){
            if(btn=="btn1" || btn=="btn2" || btn=="btn3" ){
                return 0;
            }
            
            if(btn=="btn4" || btn=="btn5" || btn=="btn6" ){
                return 1;
            }
            
            if(btn=="btn7" || btn=="btn8" || btn=="btn9" ){
                return 2;
            }
          
        }
    
    
        returnColumnPosition(btn){
            if(btn=="btn1" || btn=="btn4" || btn=="btn7" ){
                return 0;
            }
            
            if(btn=="btn2" || btn=="btn5" || btn=="btn8" ){
                return 1;
            }
            
            if(btn=="btn3" || btn=="btn6" || btn=="btn9" ){
                return 2;
            }
          
        }
    
    
    
        isWinner(jugador){
          var winner=false;
            
			//Check filas
		
		 	if ((this.casillas[0][0] == jugador) 
                && (this.casillas[0][1] == jugador)
                && (this.casillas[0][2]==jugador)){
				winner = true;
			}
			if ((this.casillas[1][0] == jugador) 
                && (this.casillas[1][1] == jugador) 
                && (this.casillas[1][2]==jugador)){
				winner = true;
			}
			if ((this.casillas[2][0] == jugador) 
                && (this.casillas[2][1] == jugador) 
                && (this.casillas[2][2]==jugador)){
				winner = true;
			}
			
			//Check columnas
			
			if ((this.casillas[0][2] == jugador) 
                && (this.casillas[1][1] == jugador) 
                && (this.casillas[2][0]==jugador)){
				winner = true;
			}
			if ((this.casillas[0][0] == jugador) 
                && (this.casillas[1][0] == jugador) 
                && (this.casillas[2][0]==jugador)){
				winner = true;
			}
			if ((this.casillas[0][1] == jugador) 
                && (this.casillas[1][1] == jugador) 
                && (this.casillas[2][1]==jugador)){
				winner = true;
			}
			if ((this.casillas[0][2] == jugador) 
                && (this.casillas[1][2] == jugador) 
                && (this.casillas[2][2]==jugador)){
				winner = true;
			}
			
			//Check diagonal
			
			if ((this.casillas[0][0] == jugador) 
                && (this.casillas[1][1] == jugador) 
                && (this.casillas[2][2]==jugador)){
				winner = true;
			}
		return winner;
        }
    
    
        checkWinner(){
            
            this.p1Win = this.isWinner(1);
            this.p2Win = this.isWinner(2);
            
            if(this.p1Win || this.p2Win){
                if(this.p1Win){
                document.getElementById('result').value='Juego terminado, ha ganado el jugador rojo';
                document.getElementById('result').className='G1';
                document.getElementById('resultado').style.display='block';
                this.disabledAll();
                }
                if(this.p2Win){
                    document.getElementById('result').value='Juego terminado, ha ganado el jugador azul';
                    document.getElementById('result').className='G2';
                    document.getElementById('resultado').style.display='block';
                    document.getElementById('turno').value='';
                    this.disabledAll();
                }
            }else{
                if(this.contJugadas==9){
                document.getElementById('result').value='Juego terminado, ha habido un empate';
                document.getElementById('result').className='F';
                document.getElementById('resultado').style.display='block';
                document.getElementById('turno').value='';
                this.disabledAll();
                }
            } 
        
        }
    
        
        changePlayer(){
            
            if(this.turn=="P2"){
                document.getElementById('btn1').className='J2';
                document.getElementById('btn2').className='J2';
                document.getElementById('btn3').className='J2';
                document.getElementById('btn4').className='J2';
                document.getElementById('btn5').className='J2';
                document.getElementById('btn6').className='J2';
                document.getElementById('btn7').className='J2';
                document.getElementById('btn8').className='J2';
                document.getElementById('btn9').className='J2';
                
                document.getElementById('turno').className='T2';
                document.getElementById('turno').value='Turno del jugador azul';
            }
            if(this.turn=="P1"){
                document.getElementById('btn1').className='J1';
                document.getElementById('btn2').className='J1';
                document.getElementById('btn3').className='J1';
                document.getElementById('btn4').className='J1';
                document.getElementById('btn5').className='J1';
                document.getElementById('btn6').className='J1';
                document.getElementById('btn7').className='J1';
                document.getElementById('btn8').className='J1';
                document.getElementById('btn9').className='J1';
                
                document.getElementById('turno').className='T1';
                document.getElementById('turno').value='Turno del jugador rojo';
            }
            
        }
    
    
        disabledAll(){
            
            document.getElementById('btn1').className='Fi';
            document.getElementById('btn2').className='Fi';
            document.getElementById('btn3').className='Fi';
            document.getElementById('btn4').className='Fi';
            document.getElementById('btn5').className='Fi';
            document.getElementById('btn6').className='Fi';
            document.getElementById('btn7').className='Fi';
            document.getElementById('btn8').className='Fi';
            document.getElementById('btn9').className='Fi';
            
            document.getElementById('btn1').disabled=true;
            document.getElementById('btn2').disabled=true;
            document.getElementById('btn3').disabled=true;
            document.getElementById('btn4').disabled=true;
            document.getElementById('btn5').disabled=true;
            document.getElementById('btn6').disabled=true;
            document.getElementById('btn7').disabled=true;
            document.getElementById('btn8').disabled=true;
            document.getElementById('btn9').disabled=true;
            
        }
    
    
        enableAll(){
            
            document.getElementById('btn1').className='J1';
            document.getElementById('btn2').className='J1';
            document.getElementById('btn3').className='J1';
            document.getElementById('btn4').className='J1';
            document.getElementById('btn5').className='J1';
            document.getElementById('btn6').className='J1';
            document.getElementById('btn7').className='J1';
            document.getElementById('btn8').className='J1';
            document.getElementById('btn9').className='J1';
            
            document.getElementById('btn1').disabled=false;
            document.getElementById('btn2').disabled=false;
            document.getElementById('btn3').disabled=false;
            document.getElementById('btn4').disabled=false;
            document.getElementById('btn5').disabled=false;
            document.getElementById('btn6').disabled=false;
            document.getElementById('btn7').disabled=false;
            document.getElementById('btn8').disabled=false;
            document.getElementById('btn9').disabled=false;
        }
    
    
        mostrarTablero(){
            
            if(this.checkCampos()){
                 document.getElementById('inicio').style.display='none';
            document.getElementById('tablero').style.display='block';
            }else{
                document.getElementById('warning').style.display='inline-block';
            }        
        }
    
    
        mostrarInicio(){
            document.getElementById('tablero').style.display='none';
            document.getElementById('resultado').style.display='none';
            document.getElementById('inicio').style.display='block' 
        }
    
    
        restablecer(){
            
            document.getElementById('btn1').value=' ';
            document.getElementById('btn2').value=' ';
            document.getElementById('btn3').value=' ';
            document.getElementById('btn4').value=' ';
            document.getElementById('btn5').value=' ';
            document.getElementById('btn6').value=' ';
            document.getElementById('btn7').value=' ';
            document.getElementById('btn8').value=' ';
            document.getElementById('btn9').value=' ';
            
            document.getElementById('J1').value='';
            document.getElementById('J2').value='';
            
             document.getElementById('warning').style.display='none';
            document.getElementById('turno').value='Turno del jugador rojo';
            
            this.turn="P1";
            this.p1Win=false;
            this.p2Win=false;
            this.mostrarInicio();
            this.enableAll();
            this.casillas= new Array(3);
            this.createArray();
            this.contJugadas=0;
            
        }
    
        checkCampos(){
            if(document.getElementById('J1').value=="" || document.getElementById('J2').value==""){
                return false;
            }
            return true;
        }

}

var t = new TresEnRaya();

