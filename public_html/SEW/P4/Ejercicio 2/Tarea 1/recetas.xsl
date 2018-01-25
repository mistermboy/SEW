<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" /> 
<xsl:template match="/">
<xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>
<html lang="es">
<head>
	<title>Ejercicio 2: Recetas</title>
    <link rel="stylesheet" type="text/css" href="estilo.css"/>
</head>
<body>
  <header>
    <h1>Recetas</h1> 
  </header>
  
  <xsl:for-each select="recetas/receta">
    <article>
        <h2>Receta: <xsl:value-of select="nombre"/></h2>	
			<h3>Tipo: </h3>
			<p><xsl:value-of select="tipo"/></p>
			<h3>Ingredientes: </h3>
				<ul>
					<xsl:for-each select="ingredientes/ingrediente">
					 <li> <xsl:value-of select="nombre"/> - <xsl:value-of select="cantidad"/>	</li>
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
  </xsl:for-each>
</body>
</html>

</xsl:template>
</xsl:stylesheet>