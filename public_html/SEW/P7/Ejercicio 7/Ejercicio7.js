// Ejercicio7.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
var mapa;
var marcadores=[];
var asturias = new google.maps.LatLng(43.3695167,  -5.8661674);
var fixedZoom=9;

var puntuacion=0;
var turno=0;
var numMarcadores=0;

var estrella='https://unioviedo-my.sharepoint.com/personal/uo252406_uniovi_es/_layouts/15/guestaccess.aspx?docid=0feb02ef99d28475f83d75d27665a20ed&authkey=AcQIOWm0w2Mn70FO83jYP9Y&e=7e912ad014904de78279f32dbc8b6acb';


var nombres = new Array();
var lati = new Array();
var long = new Array();
    
var xml='CiudadesFaciles.xml';

var ciudades;


var mapaOpciones = {
    zoom: fixedZoom,
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    disableDoubleClickZoom:true,
    draggable:false,
    mapTypeId: 'satellite',
    disableDefaultUI:true,
    center: asturias,
  };






function initialize() {

     mapa = new google.maps.Map(document.getElementById('mapa-canvas'), mapaOpciones);
    
     google.maps.event.addListener(mapa, 'click', function(event) {
       if(numMarcadores==0) addMarcador(event.latLng);numMarcadores++;showCorregir();
  });
    
    
    mostrarCiudad();
    
}



//Añade un marcador y lo almacena en el array
function addMarcador(localizacion) {
  var marcador = new google.maps.Marker({
    position: localizacion,
    map: mapa,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  marcadores.push(marcador);
}


function activarMarcadores(mapa) {
  for (var i = 0; i < marcadores.length; i++) {
    marcadores[i].setMap(mapa);
  }
}


function ocultarMarcadores() {
  activarMarcadores(null);
}
  
function mostrarMarcadores() {
  activarMarcadores(mapa);
}

function eliminarMarcadores() {
  ocultarMarcadores();
  marcadores = [];
}


function corregir(){
    var location = new google.maps.LatLng(lati[turno],long[turno]);
     var marker = new google.maps.Marker({
            position: location,
            icon: estrella,
          });
    
     var circleB = new google.maps.Circle({  
             strokeOpacity: 0.00001,
             strokeWeight: 0,
            center: location,
            radius: 10000,
            fillColor:'#FF0000'
          });
    
    var circleM = new google.maps.Circle({
             strokeOpacity: 0.00001,
             strokeWeight: 0,
            center: location,
            radius: 5000,
            fillColor:'#FBFBFF'
          });
    
    var circleS = new google.maps.Circle({
             strokeOpacity: 0.00001,
             strokeWeight: 0,
            center:location,
            radius: 2500,
            fillColor:'#FF0000'
          });
    marcadores.push(marker);
    marcadores.push(circleB);
    marcadores.push(circleM);
    marcadores.push(circleS);
    mostrarMarcadores();
    setTimeout(function(){ mapa.panTo(location);setTimeout(function(){ mapa.setZoom(11) }, 400);}, 700);
    calcPuntuacion();
    document.getElementById('punt').value=puntuacion;
    turno++;
    
    if(turno==6){
        setTimeout(function(){showFinish(); }, 1000);
    }else{
        setTimeout(function(){showSiguiente(); }, 1000);
    }
    
}



function restablecer(){
    numMarcadores=0;
    eliminarMarcadores();
    setTimeout(function(){mapa.setZoom(9);setTimeout(function(){ mapa.panTo(asturias) }, 400);}, 700);
    mostrarCiudad();
    ocultaSiguiente();
}


function calcPuntuacion(){
    var location = new google.maps.LatLng(lati[turno],long[turno]);
   var  distance = google.maps.geometry.spherical.computeDistanceBetween(location,marcadores[0].position);
    
    if(distance<10000){
        if(distance<5000){
            if(distance<2500){
                puntuacion+=50;
            }else{
                puntuacion+=25;
            }
        }else{
            puntuacion+=10;
        }
    }
}


function getCiudad(){
    var cont=0;
    for(var i=0;i<nombres.length;i++){
        if(turno==cont){
            return nombres[i];
        }
        cont++;
    }
}

function mostrarCiudad(){
    var ciudad = getCiudad();
    if(ciudad=='cangas'){
         document.getElementById('ciud').value='cangas de narcea';
    }else{
         document.getElementById('ciud').value=ciudad;
    }
   
}


function start(){
    marcadores=[];
    puntuacion=0;
    turno=0;
    numMarcadores=0;
    
    document.getElementById('controls').style.display='block';
    document.getElementById('t1').style.display='block';
    document.getElementById('t2').style.display='none';
    document.getElementById('B').style.display='block';
    document.getElementById('panel').style.display='block';
    document.getElementById('s1').style.display='block';
    document.getElementById('corre').style.display='none';
    document.getElementById('fin').style.display='none';
    document.getElementById('dif').style.display='none';
    document.getElementById('punt').value=puntuacion;
    
    
    initialize();
   
}

function showCorregir(){
    document.getElementById('corre').style.display='inline';
}

function showSiguiente(){
    document.getElementById('corre').style.display='none';
    document.getElementById('sig').style.display='inline';
}

function ocultaSiguiente(){
    document.getElementById('sig').style.display='none';
}

function showFinish(){
    ocultaSiguiente();
    document.getElementById('corre').style.display='none';
    document.getElementById('fin').style.display='inline';
}


function finish(){
    document.getElementById('panel').style.display='none';
    document.getElementById('s1').style.display='none';
    var F1 = "<h2 id='res'>Debes practicar más...</h2>";
    var F2 = "<h2 id='res'>No está mal</h2>";
    var F3 = "<h2 id='res'>¡Bien hecho!</h2>";
    var F4 = "<h2 id='res'>¡Eres todo un experto!</h2>";
    
    var result = F1;
    var punt = "\n Tu puntuación ha sido de "+puntuacion+ " puntos</h2>";
    
    
    if(puntuacion <=60 ){
        result=F1;
    }
    
    if(puntuacion > 60 && puntuacion <=150){
        result=F2;
    }
      
    if(puntuacion > 150 && puntuacion <=250){
        result=F3;
    }
    
    if(puntuacion >250){
        result=F4;
    }
    
    $("h3").attr('style','display:block'); 
    $("h3").append(result+punt); 
    
     document.getElementById('B').style.display='none';
     document.getElementById('btnRe').style.display='inline';
}

function reStart(){
     $("h3").remove();
     var p = document.createElement("h3");
     p.innerHTML = ""; 
     $("header").after(p);
     document.getElementById('btnRe').style.display='none';
     document.getElementById('t2').style.display='block';
     document.getElementById('t1').style.display='none';
}


function cargarCiudades(){
    nombres = new Array();
    lati = new Array();
    long = new Array();
   
    console.log(xml);
     $.ajax({
            dataType: "xml",
            url: xml,
            method: 'GET',
            success: function(datos){
                
                
                 var i=0;
                 $("city", datos).each(function(){
                     console.log()
                     nombres[i] = $('name',this).text();
                     lati[i] = $("lat",this).text();
                     long[i] = $("lon",this).text();
                     i++;
                });    
                
            
                       
                },
            error:function(){
                $("h3").html("Â¡Tenemos problemas! No se pudo cargar el archivo XML"); 
                $("h4").remove();
                $("p").remove();
                }
        });
}


function selectCiudad(){
    var select =  document.getElementById('sDificultad');
    var str = select.options[select.selectedIndex].value;
    if(str=='Fa'){
        xml='CiudadesFaciles.xml';
    }
    
    if(str=='Me'){
        xml='CiudadesMedias.xml';
    }
    
    if(str=='Di'){
        xml='CiudadesDificiles.xml';
    }
    cargarCiudades();
}



google.maps.event.addDomListener(window, 'load', cargarCiudades);



