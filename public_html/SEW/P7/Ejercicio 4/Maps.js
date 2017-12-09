// Maps.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
var mapa;
var marcadores=[];
var asturias = new google.maps.LatLng(43.3695167,  -5.8661674);
var fixedZoom=9;

var puntuacion=0;
var turno=0;

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


 var estrella='https://unioviedo-my.sharepoint.com/personal/uo252406_uniovi_es/_layouts/15/guestaccess.aspx?docid=0feb02ef99d28475f83d75d27665a20ed&authkey=AcQIOWm0w2Mn70FO83jYP9Y&e=7e912ad014904de78279f32dbc8b6acb';



var ciudades = {
    
        gijon: {
          center: {lat: 43.5314853, lng: -5.7034739}
        },
        oviedo:{
            center: {lat: 43.3694815, lng: -5.8836772}
        },
        aviles:{
            center: {lat: 43.5574496, lng: -5.93553}
        },
        llanes:{
            center: {lat: 43.4201498, lng: -4.7615676}
        },
        mieres:{
            center: {lat: 43.2455441, lng: -5.7940835}
        },
        cangas:{
            center: {lat: 43.1815196, lng: -6.5578828}
        },
        sograndio:{
            center: {lat: 43.2871408, lng: -6.0376158}
        }
    

};
function initialize() {

  mapa = new google.maps.Map(document.getElementById('mapa-canvas'), mapaOpciones);
    
     google.maps.event.addListener(mapa, 'click', function(event) {
        addMarcador(event.latLng);
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


// Oculta todos los marcadores, pero siguen almacenados en el array 
function ocultarMarcadores() {
  activarMarcadores(null);
}

// Mostrar todos los marcadores del array    
function mostrarMarcadores() {
  activarMarcadores(mapa);
}

// Oculta los marcadores y después los elimina del array
function eliminarMarcadores() {
  ocultarMarcadores();
  marcadores = [];
}


function corregir(){
    var location = new google.maps.LatLng(ciudades[getCiudad()].center.lat,ciudades[getCiudad()].center.lng);
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
}



function restablecer(){
    eliminarMarcadores();
    setTimeout(function(){mapa.setZoom(9);setTimeout(function(){ mapa.panTo(asturias) }, 400);}, 700);
    mostrarCiudad();
}


function calcPuntuacion(){
    var location = new google.maps.LatLng(ciudades[getCiudad()].center.lat,ciudades[getCiudad()].center.lng);
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
    for(var ciudad in ciudades){
        if(turno==cont){
            return ciudad;
        }
        cont++;
    }
    if(turno==6){
        finalizarPartida();
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


google.maps.event.addDomListener(window, 'load', initialize);


