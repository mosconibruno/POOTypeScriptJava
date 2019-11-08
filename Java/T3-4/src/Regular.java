
public class Regular extends Usuario{

	
	
	public Regular(String login, String nome, int idade) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}

	public void dashBoard(){
		System.out.println("Login "+super.getLogin());
		System.out.println("Nome  " +super.getNome());
		System.out.println("Idade  "+super.getIdade());
	}
	
	public void lerArquivoRegular(String arq){
		System.out.println("Usuario le arquivo : "+arq);
	}
	
	public void gravaArquivoRegular(String arq){
		System.out.println("O arquivo "+arq+" foi sobrescrito");
	}
	
	public void despedidaRegular(){
		System.out.println("Ate logo "+super.getLogin());
	}
}
