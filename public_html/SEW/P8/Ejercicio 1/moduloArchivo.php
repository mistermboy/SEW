<?php
            class ArchivoTexto {
              
               protected $_fileName;
               private $_file;

              function __construct($_fileName) {
                    $this->_fileName = $_fileName;
                }
                
                
                function createFile(){
                   $this->_file = fopen($this->_fileName,"w")  or die("El archivo no existe");
                   fclose($this->_file);
               }
                
                function writeFile($_content){
                    $this->_file = fopen($this->_fileName,"w") or die("El archivo no existe");
                    fwrite($this->_file,$_content);
                    fclose($this->_file);
               }
                
                 function modifyFile($_content){
                    $_actual = file_get_contents($this->_fileName);
                    if ($_actual !== false){
                        $_actual .= $_content;
                        file_put_contents( $this->_fileName,$_actual);
                    } else{
                         echo "<p>ERROR: el archivo no existe</p>";

                    }
               }
                
                
                function viewFile(){
                        echo "<h3>Contenido del archivo ",$this->_fileName,": </h3>";
                        $this->_file = fopen($this->_fileName,"r")  or die("El archivo no existe");
                        echo "<ul>";
                        while (!feof($this->_file)) {
                            $_linea = fgets($this->_file); 
                            echo "<li>" .$_linea ."</li>";
                        }
                        echo "</ul>";
                       fclose( $this->_file);
                }    
                
                
                function deleteInfoFile(){
                    $this->_file = fopen($this->_fileName,"w")  or die("No se pudo eliminar la información del archivo");
               }  
                
               function deleteFile(){
                   if(unlink($this->_fileName)){
                       echo "<p>El fichero se ha borrado correctamente</p>";
                   }else{
                       echo "<p>El fichero no se ha podido borrar correctamente</p>";
                   }
                   
               }     
                    

            }
      
        ?> 
