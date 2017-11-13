<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" /> 
<xsl:variable name = "condition1" select ="'Queso'"/>
<xsl:variable name = "condition2" select ="'Leche'"/>
<xsl:variable name = "condition3" select ="'Huevos'"/>
<xsl:variable name = "condition4" select ="'Carne'"/>
<xsl:variable name = "condition5" select ="'Pescado'"/>
<xsl:variable name = "condition6" select ="'Bacalao'"/>
<xsl:variable name = "condition7" select ="'Langostinos'"/>
<xsl:variable name = "condition8" select ="'Sepia'"/>
<xsl:variable name = "condition9" select ="'Pollo'"/>

<xsl:template match="/">
<xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>
<html lang="es">
<head>
	<title>Ejercicio 2: Recetas Veganas</title>
    <link rel="stylesheet" type="text/css" href="estilo.css"/>
</head>
<body>
  <header>
    <h1>Recetas</h1> 
  </header>
  
  <xsl:for-each select="recetas/receta">
	<xsl:if test=" not(ingredientes/ingrediente/nombre = $condition1) and not(ingredientes/ingrediente/nombre = $condition2)
	and not(ingredientes/ingrediente/nombre = $condition3) and not(ingredientes/ingrediente/nombre = $condition4) 
	and not(ingredientes/ingrediente/nombre = $condition5) and not(ingredientes/ingrediente/nombre = $condition6)
	and not(ingredientes/ingrediente/nombre = $condition7) and not(ingredientes/ingrediente/nombre = $condition8) and not(ingredientes/ingrediente/nombre = $condition9)">
    <article>
        <h2>Receta: <xsl:value-of select="nombre"/></h2>	
			<h3>Tipo: </h3>
			<p><xsl:value-of select="tipo"/></p>
			<h3>Ingredientes: </h3>
			<ul>
				 <xsl:for-each select="ingredientes/ingrediente">
					  <li>Nombre: <xsl:value-of select="nombre"/> - <xsl:value-of select="cantidad"/></li>
				</xsl:for-each>
			</ul>
			<h3>Calorias: </h3>
				<p><xsl:value-of select="calorias"/></p>
			<h3>Pasos: </h3>
				<ul>
					<xsl:for-each select="pasos/paso">
					 <li><xsl:value-of select="."/></li>
				</xsl:for-each>
				</ul>
			<h3>Tiempo:</h3>
				<p><xsl:value-of select="tiempo"/></p>
			<h3>Dificultad:</h3> 
				<p><xsl:value-of select="dificultad"/></p>
			<h3>Elementos para la elaboración:</h3> 
				<ul>
					<xsl:for-each select="elementosElabotación/elementoElabotación">
					 <li><xsl:value-of select="."/></li>
				</xsl:for-each>
				</ul>
			<h3>Origen: </h3>
				<p><xsl:value-of select="origen"/></p>
      </article>
	  </xsl:if>
  </xsl:for-each>
</body>
</html>

</xsl:template>
</xsl:stylesheet>