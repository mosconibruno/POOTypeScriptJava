
public class Grupo extends Usuario{
	public Grupo(String login, String nome, int idade) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	
	public Usuario groupBoard(Usuario u){
		System.out.println("Usuario deletado ");
		return u;
	}
	 
	public String adicionaArquivoGrupo(String arq){
		System.out.println("O arquivo "+arq+" foi adicionado");
		return arq;
	}

	public String deletaArquivoGrupo(String arq){
		System.out.println("O arquivo "+arq+"	foi deletado");
		return arq;

	}
	
	public void despedida(){
		System.out.println("Tchau "+this.getLogin());
	}


}
