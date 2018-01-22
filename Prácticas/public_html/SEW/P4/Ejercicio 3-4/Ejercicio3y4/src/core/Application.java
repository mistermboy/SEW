package core;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Application {

	public static void main(String[] args) {
		execute(args[0]);
	}

	private static void execute(String xml) {
		try {
			XMLReader reader = new XMLReader(xml);
			XMLWriter writer = new XMLWriter();
			ArrayList<Pokemon> pokemons = reader.getPokemons();
			System.out.println("Pokemons disponibles: ");
			System.out.println();
			System.out.println("Ultra Ligeros");
			System.out.println("Ligeros");
			System.out.println("Normales");
			System.out.println("Pesados");
			System.out.println("Ultra Pesados");

			System.out.print("\n");
			System.out.println("\nIntroduzca un tipo: (Distingue mayúsculas y minúsculas) ");
			while (true) {
				BufferedReader entrada = new BufferedReader(new InputStreamReader(System.in));
				String tipo = entrada.readLine();
				ArrayList<Pokemon> seleccion = getPokemonsByTipo(tipo, pokemons);
				if (seleccion.size() > 0) {
					writer.exportXML(seleccion, tipo);
					System.out.println("XML generado con exíto");
					break;
				}
				System.out.println("No existen pokemons de este tipo, reintroduzca un tipo");
			}

		} catch (Exception e) {
			System.out.println("Ocurrió algún error");
		}
	}

	public static ArrayList<Pokemon> getPokemonsByTipo(String tipo, ArrayList<Pokemon> pokemons) {
		String[] s = tipo.split("");
		String cad = "";
		for (int j = 0; j < s.length - 1; j++) {
			cad += s[j].toString();
		}
		tipo = cad;
		ArrayList<Pokemon> pokeTipo = new ArrayList<Pokemon>();
		for (int i = 0; i < pokemons.size(); i++) {
			if (pokemons.get(i).getTipo().equals(tipo)) {
				pokeTipo.add(pokemons.get(i));
			}
		}
		return pokeTipo;
	}
	
}
