
public class Guest extends Usuario {

	public Guest(String login, String nome, int idade) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	public void leArquivoGuest(String arq){
		System.out.println("Usuario le arquivo : "+arq);
	}
	
	public void despedidaGuest(){
		System.out.println("Volte logo "+super.getLogin());
	}
}
