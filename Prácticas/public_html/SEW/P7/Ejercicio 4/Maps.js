// Maps.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
var mapa;
        
var marcadores=[]; //Array para guardar los marcadores
        
function initialize() {
  var oviedo = new google.maps.LatLng(43.3500,  -5.8500);
  var mapaOpciones = {
    zoom: 15,
    center: oviedo,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  mapa = new google.maps.Map(document.getElementById('mapa-canvas'), mapaOpciones);

}

  function localize(){
        
        
        navigator.geolocation.getCurrentPosition(function(position){
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var map = new google.maps.Map(document.getElementById('mapa-canvas'),{
                center: latlng,
                zoom: 10
            });

            var mark = new google.maps.Marker({
                position: latlng,
                map: map,
                title: 'Posicion'
            });
            
        });
        
    }



   
google.maps.event.addDomListener(window, 'load', initialize);

