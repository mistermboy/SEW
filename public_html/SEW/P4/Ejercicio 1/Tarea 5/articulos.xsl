<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" /> 
<xsl:template match="/">
<xsl:variable name = "autorCondition" select ="'M. Shamsfard'"/>
<xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>
<html lang="en">
<head>
	<title>Ejercicio 1: Artículos</title>
    <link rel="stylesheet" type="text/css" href="estilo.css"/>
</head>
<body>
  <header>
    <h1>Artículos</h1> 
  </header>
  
  <xsl:for-each select="articulos/articulo">
	  <xsl:sort order="ascending" select="año"/>
	  <xsl:if test="autores/autor/nombre=$autorCondition">
			<article>
				<h2>Artículo: <xsl:value-of select="título"/></h2>	
					<h3>Autores:</h3>
						<ul>
							<xsl:for-each select="autores/autor">
							 <li> <xsl:value-of select="nombre"/>	 - <xsl:value-of select="correo"/></li>
						</xsl:for-each>
						</ul>	
					<h3>Resumen: </h3>
						<p><xsl:value-of select="resumen"/></p>
					<h3>Palabras clave: </h3>
						<ul>
							<xsl:for-each select="palabrasClave/palabraClave">
							 <li><xsl:value-of select="."/></li>
						</xsl:for-each>
						</ul>
					<h3>Revista:</h3>
						<p><xsl:value-of select="nombreRevista"/></p>
					<h3>Volumen:</h3> 
						<p><xsl:value-of select="volumenRevista"/></p>
					<h3>Página inicial:</h3> 
						<p><xsl:value-of select="páginaInicial"/></p>
					<h3>Página fin:</h3> 
						<p><xsl:value-of select="páginaFinal"/></p>
					<h3>Año: </h3>
						<p><xsl:value-of select="año"/></p>
		 </article>
	</xsl:if>
  </xsl:for-each>
</body>
</html>

</xsl:template>
</xsl:stylesheet>