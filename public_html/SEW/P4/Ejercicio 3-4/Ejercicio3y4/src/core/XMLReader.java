package core;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;

public class XMLReader {
	private ArrayList<Pokemon> pokemons = new ArrayList<Pokemon>();
	private String xml = null;

	public XMLReader(String xml) {
		this.xml=xml;
		cargarXml();
	}

	private void cargarXml() {
		SAXBuilder builder = new SAXBuilder();
		File xmlFile = new File(xml);
		try {
			Document document = (Document) builder.build(xmlFile);
			Element rootNode = document.getRootElement();
			List list = rootNode.getChildren("pokemon");

			for (int i = 0; i < list.size(); i++) {
				Element tabla = (Element) list.get(i);
				List lista_campos = tabla.getChildren();
				String name = null;
				int height = 0;
				int weight = 0;
				int baseExperience = 0;
				for (int j = 1; j <= 5; j++) {
					Element campo = (Element) lista_campos.get(j);
					if (j == 1) {
						name = campo.getText();
					} else if (j == 3) {
						height = Integer.valueOf(campo.getValue());
					} else if (j == 4) {
						weight = Integer.valueOf(campo.getValue());
					} else if (j == 5) {
						baseExperience = Integer.valueOf(campo.getValue());
					}

				}

				pokemons.add(new Pokemon(name, height, weight, baseExperience));

			}
		} catch (IOException io) {
			System.out.println(io.getMessage());
		} catch (JDOMException jdomex) {
			System.out.println(jdomex.getMessage());
		}
	}

	public ArrayList<Pokemon> getPokemons() {
		return pokemons;
	}
	
	
	
	

}