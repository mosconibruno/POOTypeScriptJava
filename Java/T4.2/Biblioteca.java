
import java.util.ArrayList;

public class Biblioteca {
	private String nome;
	private int cont;
	private ArrayList<Estante> estantes;
	
	public Biblioteca(String nome) {
		
		this.nome = nome;
		this.estantes = new ArrayList<Estante>();
	}
	public String getNome() {
		return nome;
	}
		
	public void inserirEstante(Estante estante) {
		if (estante != null)
		estantes.add(estante);
		else
			System.out.println("Tentando inserir estante inexistente");
	}
	
	public ArrayList<Estante> mostrarEstantes() {
		return estantes;
	}

	public void listarEstantes() {
		cont = 0;
		for (Estante estante : estantes) {
			System.out.println(++cont + " - " + estante.getNome() + " de " + estante.getCatEstante());
		}
	}
	
	public int contarCiencia() {
		cont = 0;
		for (Estante estante : estantes) {			
			if(estante.getCatEstante()==(Categoria.Ciencia)) {
				for(int i=0; i < estante.getCont(); i++) {
					cont++;
				}
			}
		}
		return cont;
	}
	
	public void listarTudo() {
		Livro[] l;
		cont = 0;
		for (Estante estante : estantes) {
			l = estante.mostrarLivros();
			for (int i = 0; i < estante.getCont(); i++) {
				if(l[i] != null)
					System.out.println(++cont + " - " + l[i].getNome() + " escrito por " + l[i].getAutor());
			}
		}
	}
	
	public Livro[] listarFilosofia() {		
		Livro[] livrosFilo = new Livro[100];
		for (Estante estante : estantes) {
			if(estante.getCatEstante() == (Categoria.Filosofia)) {
				for(int i=0; i < estante.getCont(); i++) {
					if(estante.mostrarLivros()[i] != null)
						livrosFilo[i] = estante.mostrarLivros()[i];				
				}
			}
		}
		return livrosFilo;
	}
	
	public Livro[] listarCiencia() {		
		Livro[] livrosCie = new Livro[100];
		for (Estante estante : estantes) {
			if(estante.getCatEstante() == (Categoria.Ciencia)) {
				for(int i=0; i < estante.getCont(); i++) {
					if(estante.mostrarLivros()[i] != null)
						livrosCie[i] = estante.mostrarLivros()[i];				
				}
			}
		}
		return livrosCie;
	} 
	
	public Livro[] listarLiteratura() {		
		Livro[] livrosLit = new Livro[100];
		for (Estante estante : estantes) {
			if(estante.getCatEstante() == (Categoria.Literatura)) {
				for(int i=0; i < estante.getCont(); i++) {
					if(estante.mostrarLivros()[i] != null)
						livrosLit[i] = estante.mostrarLivros()[i];				
				}
			}
		}
		return livrosLit;
	} 
		
	public ArrayList<String> listarAutores(Categoria cat) {
		ArrayList<String> al = new ArrayList<String>();
		Livro[] l;
		for (Estante estante : estantes) {
			if(estante.getCatEstante() == cat) {
				l = estante.mostrarLivros();
				for(int k=0; k < estante.getCont(); k++) {
					al.add((l[k].getAutor()));					
				}
			}		
		}
		return al;
	}
	
	
}
