
public class Super extends Usuario {

	public Super(String login, String nome, int idade) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	
	
	public void ExcluirTodos(){
		System.out.println("Todos usuarios foram excluidos");
	}
	
	public void bloquearUsuarioSuper(String nm){
		System.out.println("O usuario "+nm+" foi bloqueado");
	}
	
	public void desbloquearUsuarioSuper(String nm){
		System.out.println("O usuario "+nm+" foi desbloqueado" );
	}
	
	
	public void despedidaSuper(){
		System.out.println("Adeus "+super.getLogin());
	}
}
