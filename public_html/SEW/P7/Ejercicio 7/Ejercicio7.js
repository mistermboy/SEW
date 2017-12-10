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


 var estrella='https://unioviedo-my.sharepoint.com/personal/uo252406_uniovi_es/_layouts/15/guestaccess.aspx?docid=0feb02ef99d28475f83d75d27665a20ed&authkey=AcQIOWm0w2Mn70FO83jYP9Y&e=7e912ad014904de78279f32dbc8b6acb';



var ciudadesFaciles = {
    
        Gijon: {
          center: {lat: 43.5314853, lng: -5.7034739}
        },
        Oviedo:{
            center: {lat: 43.3694815, lng: -5.8836772}
        },
        Aviles:{
            center: {lat: 43.5574496, lng: -5.93553}
        },
        Llanes:{
            center: {lat: 43.4201498, lng: -4.7615676}
        },
        Mieres:{
            center: {lat: 43.2455441, lng: -5.7940835}
        },
        Cangas:{
            center: {lat: 43.1815196, lng: -6.5578828}
        }
};


var ciudadadesMedias = {
       Luarca: {
          center: {lat: 43.5438063, lng: -6.5342121}
        },
        Pravia:{
            center: {lat: 43.4820138, lng: -6.2201366}
        },
        Cudillero:{
            center: {lat: 43.5595783, lng: -6.1524197}
        },
        Langreo:{
            center: {lat: 43.3047594, lng: -5.7142037}
        },
        Luanco:{
            center: {lat: 43.617439, lng: -5.8038205}
        },
        Salinas:{
            center: {lat: 43.5756244, lng: -5.9601649}
        }
}

var ciudadesDificiles = {
    
        Oviñana: {
          center: {lat: 43.3547942, lng: -6.3642897}
        },
        Olloniego:{
            center: {lat: 43.3085079, lng: -5.8364115}
        },
        Belmonte:{
            center: {lat: 43.2822643, lng: -6.2224375}
        },
        Selorio:{
            center: {lat: 43.5130989, lng: -5.3803749}
        },
        Cadavedo:{
            center: {lat: 43.5473129, lng: -6.3876631}
        },
        Porciles:{
            center: {lat: 43.3021089, lng: -6.5999135}
        }
    
}


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
}

function mostrarCiudad(){
    var select =  document.getElementById('sDificultad');
    var str = select.options[select.selectedIndex].value;
   
    if(str=='Fa'){
        ciudades=ciudadesFaciles;
    }
    
    if(str=='Me'){
        ciudades=ciudadadesMedias;
    }
    
    if(str=='Di'){
        ciudades=ciudadesDificiles;
    }
    
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



