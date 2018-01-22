// Ejercicio3.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
"use strict";
class ObtencionDatos{
    
    
     constructor(nombre){
        this.nombre = nombre;
    }
    
    
    cargarDatos(){
         $.ajax({
            dataType: "xml",
            url: this.nombre,
            method: 'GET',
            success: function(datos){
                
                    //Pasar el archivo XML a un string
                    var str = (new XMLSerializer()).serializeToString(datos);
                    
                    var ciudad                = $('city',datos).attr("name");
                    var longitud              = $('coord',datos).attr("lon");
                    var latitud               = $('coord',datos).attr("lat");
                    var pais                  = $('country',datos).text();
                    var amanecer              = $('sun',datos).attr("rise");
                    var minutosZonaHoraria    = new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970   = Date.parse(amanecer);
                    amanecerMiliSeg1970      -= minutosZonaHoraria * 60 * 1000;
                    var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer             = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                    oscurecerMiliSeg1970     -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var temperatura           = $('temperature',datos).attr("value");
                    var temperaturaMin        = $('temperature',datos).attr("min");
                    var temperaturaMax        = $('temperature',datos).attr("max");
                    var temperaturaUnit       = $('temperature',datos).attr("unit");
                    var humedad               = $('humidity',datos).attr("value");
                    var humedadUnit           = $('humidity',datos).attr("unit");
                    var presion               = $('pressure',datos).attr("value");
                    var presionUnit           = $('pressure',datos).attr("unit");
                    var velocidadViento       = $('speed',datos).attr("value");
                    var nombreViento          = $('speed',datos).attr("name");
                    var direccionViento       = $('direction',datos).attr("value");
                    var codigoViento          = $('direction',datos).attr("code");
                    var nombreDireccionViento = $('direction',datos).attr("name");
                    var nubosidad             = $('clouds',datos).attr("value");
                    var nombreNubosidad       = $('clouds',datos).attr("name");
                    var visibilidad           = $('visibility',datos).attr("value");
                    var precipitacion         = $('precipitation',datos).attr("mode");
                    var descripcion           = $('weather',datos).attr("value");
                    var horaMedida            = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                    horaMedidaMiliSeg1970    -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                    
                
                    var  stringDatos = "<li>Ciudad: " + ciudad + "</li>";
                        stringDatos += "<li>País: " + pais + "</li>";
    
                
                     if(document.getElementById('cLatid').checked){
                             stringDatos += "<li>Latitud: " + latitud+ " grados</li>";
                        }if(document.getElementById('cLong').checked){
                                 stringDatos += "<li>Longitud: " + longitud + " grados</li>";
                        }if(document.getElementById('cTemp').checked){
                                 stringDatos += "<li>Temperatura: " +temperatura + " grados Celsius</li>";
                        }if(document.getElementById('cTempMax').checked){
                                 stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";      
                        }if(document.getElementById('cTempMin').checked){
                                 stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                        }if(document.getElementById('cPres').checked){
                                 stringDatos += "<li>Presión: " + presion + " " + presionUnit  + "</li>";
                        }if(document.getElementById('cHum').checked){
                                stringDatos += "<li>Humedad: " +humedad + " " + humedadUnit +  " %</li>";
                        }if(document.getElementById('cAmane').checked){
                                stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                        }if(document.getElementById('cAnoch').checked){
                                 stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                        }if(document.getElementById('cDv').checked){
                                stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                        }if(document.getElementById('cVv').checked){
                            stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                        }if(document.getElementById('cDes').checked){
                                stringDatos += "<li>Descripción: " +descripcion+ "</li>";    
                        }if(document.getElementById('cVis').checked){
                                stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                        }if(document.getElementById('cNubo').checked){
                                stringDatos += "<li>Nubosidad: " +nubosidad + " %</li></ul>";
                        }if(document.getElementById('cPreci').checked){
                                stringDatos += "<li>Precipitación: " +precipitacion + "</li></ul>";
                        }  
             
                             
                    $("p").html(stringDatos);   
                },
            error:function(){
                $("h3").html("Â¡Tenemos problemas! No se pudo cargar el archivo XML"); 
                $("h4").remove();
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
        document.getElementById('wCampos').style.display='none';
        var campos = this.checkCampos();
        this.clearAll();
        
        if(campos){
            this.ciudad='Oviedo.xml';
            this.url="http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
            this.crearElemento("h3","Datos","footer"); 
            this.crearElemento("p","","footer");
            this.cargarDatos();
            $("button").attr("disabled","disabled");
        }else{
               
            if(!campos){
                document.getElementById('wCampos').style.display='block';
                document.getElementById('wCampos').value='Seleccione algún campo';
            }
            
        }
        
    }
    
    
    
    changeAll(){
            var campos = document.forms[0];
            for (var i = 0; i < campos.checks.length; i++) {
                if(document.getElementById('cAll').checked){
                    campos.checks[i].checked=true;
                }else{
                    campos.checks[i].checked=false;
                }
                 
            }  
    }
    

    
    checkCampos(){
        var campos = document.forms[0];
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
      


var d = new ObtencionDatos('Oviedo.xml');