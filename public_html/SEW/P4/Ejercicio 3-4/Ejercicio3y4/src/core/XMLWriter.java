package core;

import java.io.FileWriter;
import java.util.ArrayList;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;

public class XMLWriter {

	public void exportXML(ArrayList<Pokemon> pokemons,String tipo){
	    try {
		Element pokemon = new Element("pokemon");
	    Document doc = new Document(pokemon);
	    
	    for(Pokemon p:pokemons) {
	    	Element poke = new Element("pokemon");
	    	poke.addContent(new Element("nombre").setText(p.getName()));
	    	poke.addContent(new Element("peso").setText(String.valueOf(p.getWeight())));
	    	poke.addContent(new Element("altura").setText(String.valueOf(p.getHeight())));
	    	poke.addContent(new Element("base_experience").setText(String.valueOf(p.getBaseExperience())));
	    	doc.getRootElement().addContent(poke);
	    }
	    XMLOutputter output = new XMLOutputter();
	    output.setFormat(Format.getPrettyFormat());
	    output.output(doc, new FileWriter("pokemons-tipo-"+tipo+".xml"));
	    }catch(Exception e) {
	    	System.out.println("Ocurrió algún error");
	    }
	}
}
