<!DOCTYPE html>
<html lang="es">
<head>
    <title>Ejercicio 1</title>
    <meta charset="utf-8"/>
    
    <meta name="author" content="UO252406" /> 

    <link href="Ejercicio1.css" rel="stylesheet" />
</head>
    
<body>
    
    <h1>Ejercicio 1</h1>
    
    <section>
        <?php
        
            echo "<h2>Creación del fichero Ejercicio1.txt</h2>";
            echo "<p class='oper'>Operación:</p>";
            echo "<p>Escritura en el fichero Ejercicio1.txt</p>";
            require("moduloArchivo.php");
            $fichero = new ArchivoTexto ("Ejercicio1.txt");
            
           
            $fichero->createFile();
        
            $fichero->writeFile("Hola Mundo\n");
            $fichero->viewFile();
            echo "<p class='oper'>Operación:</p>";
            echo "<p>Modificación de la información del fichero Ejercicio1.txt</p>";
            $fichero->modifyFile("Modificando fichero: \n");
            $fichero->modifyFile("Linea 1 modificada \n");
            $fichero->modifyFile("Linea 2 modificada \n");
            
        
            $fichero->viewFile();
        
            echo "<p class='oper'>Operación:</p>";
            echo "<p>Eliminación de la información en el fichero Ejercicio1.txt</p>";
             echo "<p class='oper'>Operación:</p>";
            echo "<p>Escritura en el fichero Ejercicio1.txt</p>";
            $fichero->deleteInfoFile();
            $fichero->writeFile("El contenido anterior ha sido borrado correctamente \n");
            $fichero->viewFile();
            
            echo "<p class='oper'>Operación:</p>";
            echo "<p>Eliminación del fichero Ejercicio1.txt</p>";
            $fichero->deleteFile();
            $fichero->viewFile();
     
        ?> 
    </section>

</body>
</html>