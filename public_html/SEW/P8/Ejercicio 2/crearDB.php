<!DOCTYPE html>
<html lang="es">
<head>
    <title>Creación de la DB</title>
    <meta charset="utf-8"/>
    
    <meta name="author" content="UO252406" /> 
    
      <link href="Ejercicio2.css" rel="stylesheet" />
</head>
    
<body>
    
        <header>
     <form  action="crearDB.php">
        <input type="submit" value="Crear la base de datos: StarWars">
     </form>
    
    <form  action="crearTabla.php">
         <input type="submit" value="Crear la tabla: JEDI">
    </form>
    
     <form action="Ejercicio2.html">
             <input type="submit" value="DATOS">
        </form>
    </header>
    
    
    
    <section>
        <?php
        
             $db = new mysqli('localhost','pepito','password2017');
                         
            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error.". No existe el usuario</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}

        
            $cadenaSQL = "CREATE DATABASE IF NOT EXISTS starwars COLLATE utf8_spanish_ci";
            if($db->query($cadenaSQL) === TRUE){
                echo "<p>Base de datos STARWARS creada con éxito (o ya existe)</p>";
            } else { 
                echo "<p>ERROR en la creación de la Base de Datos STARWARS</p>";
                exit();
            }

     
        ?> 
    </section>

</body>
</html>