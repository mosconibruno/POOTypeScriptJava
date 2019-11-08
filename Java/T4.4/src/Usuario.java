
public class Usuario {
	private String login;
	private String nome;
	private int idade;
	public Usuario(String login, String nome, int idade) {
		this.login = login;
		this.nome = nome;
		this.idade = idade;
	}
	public String getLogin() {
		return login;
	}
	public String getNome() {
		return nome;
	}
	public int getIdade() {
		return idade;
	}
	
	public void boasVindas(){
		System.out.println("Bem vindo "+login);
	}
	
	public void despedida(){
		System.out.println("Adeus");
	}
}
