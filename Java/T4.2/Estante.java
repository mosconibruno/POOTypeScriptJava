public class Estante {
	private String nome;
	private Categoria catEstante;
	private Livro[] livros;
	private int qtMax;
	private int cont;
	
	public Estante(String nome, Categoria catEstante, int qtMax) {
		
		this.nome = nome;
		this.cont = 0;
		this.qtMax = qtMax;
		this.catEstante = catEstante;
		this.livros = new Livro[qtMax];
	}
	public String getNome() {
		return nome;
	}
	public Categoria getCatEstante() {
		return catEstante;
	}
	
	public int getQtMax() {
		return qtMax;
	}
		
	public int getCont() {
		return cont;
	}
	public void inserirLivro(Livro livro) {
		if (livro != null) {
		livros[cont] = livro;
		cont++;
		}
		else
			System.out.println("Tentanto inserir livro inexistente.");
	}
	
	public void removerLivro(Livro livro) throws Exception{
		try {
		for(int i=0; i <= livros.length; i++) {
			if(livros[i] == livro) {
			livros[i] = null;
			cont--;
			break;
			}		
		}
		throw new BookNotFound();
		}catch(BookNotFound e){
			System.out.println(e.getMessage());		
		}catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("Livro não encontrado");
		}
	}
	
	public Livro[] mostrarLivros() {
		return livros ;
	}
	
	
}