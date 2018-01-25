<!DOCTYPE html>
<html lang="es">
<head>
    <title>Crear tabla</title>
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
    
                 $db->select_db("starwars");
        
        
                $crearTabla = "CREATE TABLE IF NOT EXISTS jedi (id INT NOT NULL AUTO_INCREMENT, 
                        galaticCode VARCHAR(9) NOT NULL,
                        nombre VARCHAR(255) NOT NULL, 
                        raza VARCHAR(255) NOT NULL,
                        colorSable VARCHAR(255) NOT NULL,  
                        PRIMARY KEY (id))";
            

                if($db->query($crearTabla) === TRUE){
                    echo "<p>Tabla JEDI creada con éxito (o ya existe)</p>";
                 } else { 
                    echo "<p>ERROR en la creación de la tabla PERSONA</p>";
                    exit();
                 }   
            
            $db->close();    
        ?> 
    </section>

</body>
</html>