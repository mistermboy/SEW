// Ejercicio1.js
// Informacion de asignatura
// Version 1.0. 07/11/2017. Pablo Menéndez Suárez. Universidad de Oviedo
$(document).ready(function(){
    
    
   $("#btnOcultarP").click(function(){
     $('p').hide();
   });
     $("#btnMostrarP").click(function(){
     $('p').show();
   });
    $("#btnModificarP").click(function(){
     $('p').attr('id','rojo');
   });
     $("#btnEliminarP").click(function(){
     $("p").remove();
    });
    
    
    
    $("#btnOcultarH1").click(function(){
     $('h1').hide();
   });
    $("#btnMostrarH1").click(function(){
     $('h1').show();
   });
    $("#btnModificarH1").click(function(){
     $('h1').attr('id','rojo');
   });
    $("#btnEliminarH1").click(function(){
     $("h1").remove();
    });
    
    
    
    $("#btnOcultarH2").click(function(){
     $('h2').hide();
   });
     $("#btnMostrarH2").click(function(){
     $('h2').show();
   });
     $("#btnModificarH2").click(function(){
     $('h2').attr('id','rojo');
   });
    $("#btnEliminarH2").click(function(){
     $("h2").remove();
    });
    
    
    
    
    $("#btnOcultarT").click(function(){
     $('table').hide();
   });
     $("#btnMostrarT").click(function(){
     $('table').show();
   });
     $("#btnModificarT").click(function(){
     $('table').attr('id','rojo');
   });
    $("#btnEliminarT").click(function(){
     $("table").remove();
    });
    
    
    $("#btnOcultarLis").click(function(){
     $('ul').hide();
   });
    $("#btnMostrarLis").click(function(){
     $('ul').show();
   });
    $("#btnModificarLis").click(function(){
     $('ul').attr('id','rojo');
   });
    $("#btnEliminarLis").click(function(){
     $("ul").remove();
    });
    
    
    $("#btnOcultarD").click(function(){
     $('#D').hide();
   });
    $("#btnMostrarD").click(function(){
     $('#D').show();
   });
    $("#btnModificarD").click(function(){
     $('#D').attr('id','VD');
   });
    $("#btnEliminarD").click(function(){
     $("#D").remove();
    });
    
    
    $("#btnOcultarO").click(function(){
     $('#O').hide();
   });
    $("#btnMostrarO").click(function(){
     $('#O').show();
   });
    $("#btnModificarO").click(function(){
     $('#O').attr('id','OK');
   });
    $("#btnEliminarO").click(function(){
     $("#O").remove();
    });
    
    
    $("#btnOcultarL").click(function(){
     $('#L').hide();
   });
    $("#btnMostrarL").click(function(){
     $('#L').show();
   });
    $("#btnModificarL").click(function(){
     $('#L').attr('id','LA');
   });
    $("#btnEliminarL").click(function(){
     $("#L").remove();
    });
    
    
    
     $("#btnAdd").click(function(){
        var T1 = "<h1>H1 creado con éxito</h1>";
        var T2 = "<h2>H2 creado con éxito</h2>";
        var T3 = $("<h3></h3>").text("H3 creado con éxito");  
        var p = document.createElement("p");
        p.innerHTML = "Párrafo creado con éxito"; 
        $("h1").append(T1); 
        $("p").after(T2);
        $("p").before(T3);
        $("p").after(p); // Añade los nuevos elementos
    });
 
    
    $("*", document.body).each(function() {
    var fatherTag = $(this).parent().get(0).tagName;
    $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + fatherTag + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
});
    
 });



