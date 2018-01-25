// InfoNavegador.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
var infoNavegador = new Object();
infoNavegador.nombre= navigator.appName;
infoNavegador.idioma = navigator.language;
infoNavegador.version = navigator.appVersion;
infoNavegador.plataforma = navigator.platform;
infoNavegador.vendedor = navigator.vendor;
infoNavegador.agente = navigator.userAgent;
infoNavegador.javaActivo = navigator.javaEnabled();