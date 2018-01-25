<!DOCTYPE html>
<html lang="es">
<head>
    <title>Search</title>
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

            
            $consultaPre = $db->prepare("SELECT * FROM jedi WHERE galacticCode = ?");   
        
            $consultaPre->bind_param('s', $_GET["galacticCode"]);    

            $consultaPre->execute();
            $resultado = $consultaPre->get_result();

            if ($resultado) {
                echo "<h2>Datos del jedi con cófigo galáctico: ". $_GET["galacticCode"] . "</h2>";
                while($row = $resultado->fetch_assoc()) {
                    echo "<ul><li>Nombre: ". $row['nombre']."</li>";
                    echo "<li>Raza: ". $row['raza'] ."</li>"; 
                    echo "<li>Color de sable: ". $row['colorSable'] ."</li></ul>";
                }
                
            } else {
                echo "Sin resultados";
            }
           

            $consultaPre->close();
            
            $db->close();
            
    
        ?> 
    </section>

</body>
</html>