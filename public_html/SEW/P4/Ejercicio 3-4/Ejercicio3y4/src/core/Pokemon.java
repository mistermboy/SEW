package core;

public class Pokemon {

	private String name;
	private int height;
	private int weight;
	private int baseExperience;
	private String tipo;

	public Pokemon(String name, int height, int weight, int baseExperience) {
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.baseExperience = baseExperience;
		clasifica();
	}

	private void clasifica() {
		if(weight<10) {
			tipo = "Ultra Ligero";
		}else if(weight >= 10 && weight < 100) {
			tipo = "Ligero";
		}
		else if(weight >= 100 && weight < 500) {
			tipo = "Normal";
		}
		else if(weight >= 500 && weight < 1000) {
			tipo = "Pesado";
		}
		else {
			tipo = "Ultra Pesado";
		}	
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getBaseExperience() {
		return baseExperience;
	}

	public void setBaseExperience(int baseExperience) {
		this.baseExperience = baseExperience;
	}
	
	public String toString() {
		return name+"\t"+height+"\t"+weight+"\t"+baseExperience;
	}
	

}
