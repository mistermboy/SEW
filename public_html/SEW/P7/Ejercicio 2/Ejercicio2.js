// Ejercicio2.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class ObtencionDatos{
    
    
     constructor(){
        this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.ciudad = '';
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = '';
    }
 
    
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                  
                    var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    
                    if(document.getElementById('cLatid').checked){
                         stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    }if(document.getElementById('cLong').checked){
                             stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                    }if(document.getElementById('cTemp').checked){
                             stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                    }if(document.getElementById('cTempMax').checked){
                             stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";      
                    }if(document.getElementById('cTempMin').checked){
                             stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                    }if(document.getElementById('cPres').checked){
                             stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    }if(document.getElementById('cHum').checked){
                            stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    }if(document.getElementById('cAmane').checked){
                            stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                    }if(document.getElementById('cAnoch').checked){
                             stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                    }if(document.getElementById('cDv').checked){
                            stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    }if(document.getElementById('cVv').checked){
                            stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    }if(document.getElementById('cDes').checked){
                            stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";    
                    }if(document.getElementById('cVis').checked){
                            stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                    }if(document.getElementById('cNubo').checked){
                            stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    }       
                    
                    $("p").html(stringDatos);
                },
            error:function(){
                $("h3").html("La ciudad introducida no es válida"); 
                $('h3').attr('id','err');
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });
    }
    
    
    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    
    
    showData(){
        document.getElementById('wCiudad').style.display='none';
        document.getElementById('wCampos').style.display='none';
        var ciudad = this.checkCiudad();
        var campos = this.checkCampos();
        this.clearAll();
        
        if(ciudad && campos){
            this.ciudad=document.getElementById('tCiudad').value;
            this.url="http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
            this.crearElemento("h3","Datos","footer"); 
            this.crearElemento("p","","footer");
            this.cargarDatos();
            $("button").attr("disabled","disabled");
        }else{
            
            if(!ciudad){
                document.getElementById('wCiudad').style.display='block';
                document.getElementById('wCiudad').value='Falta el campo ciudad \n';
            }
                
            if(!campos){
                document.getElementById('wCampos').style.display='block';
                document.getElementById('wCampos').value='Seleccione algún campo';
            }
            
        }
        
    }
    
    
    
    changeAll(){
            var campos = document.forms[1];
            for (var i = 0; i < campos.checks.length; i++) {
                if(document.getElementById('cAll').checked){
                    campos.checks[i].checked=true;
                }else{
                    campos.checks[i].checked=false;
                }
                 
            }  
    }
    
    
    checkCiudad(){
        if(document.getElementById('tCiudad').value==""){
            return false;
        }
        return true;
    }
    
    
    checkCampos(){
        var campos = document.forms[1];
        for (var i = 0; i < campos.checks.length; i++) {
            if(campos.checks[i].checked){
                return true;
            }
        }
        return false;
    }
    
    
    clearAll(){
         $("h3").remove();
         $("p").remove();
    }
    
}

var d = new ObtencionDatos();