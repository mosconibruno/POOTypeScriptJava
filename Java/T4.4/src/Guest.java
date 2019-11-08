
public class Guest extends Usuario{
	public Guest(String login, String nome, int idade) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	public void lerArquivo(String arq){
		System.out.println("Usuario le arquivo : "+arq);
		
	}
	
	public void despedida(){
		System.out.println("Volte logo "+super.getLogin());
	}
}
