<!DOCTYPE html>
<html lang="es">
<head>
    <title>Insert</title>
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
        
             $db = new mysqli('localhost', 'pepito', 'password2017', 'starwars');

            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error."</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}

            
            $consultaPre = $db->prepare("INSERT INTO jedi (galacticCode, nombre, raza,colorSable) VALUES (?,?,?,?)");   
        
            $consultaPre->bind_param('ssss', 
                    $_POST["galacticCode"],$_POST["nombre"], $_POST["raza"], $_POST["colorSable"]);    

            $consultaPre->execute();


            echo "<p>Filas agregadas: ".$consultaPre->affected_rows."</p>";
            $consultaPre->close();
            
            $db->close();
     
        ?> 
    </section>

</body>
</html>