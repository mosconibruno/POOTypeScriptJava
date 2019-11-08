
public class Grupo extends Usuario {

	public Grupo(String login, String nome, int idade) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	
	public void groupBoard(){
		System.out.println("Usuario deletado ");
	}
	 
	public void adicionaArquivoGrupo(String arq){
		System.out.println("O arquivo "+arq+" foi adicionado");
	}

	public void deletaArquivoGrupo(String arq){
		System.out.println("O arquivo "+arq+"	foi deletado");

	}
	
	public void despedidaGrupo(){
		System.out.println("Tchau "+this.getLogin());
	}

	
}


