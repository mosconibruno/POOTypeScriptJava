
public class Super extends Usuario {
	public Super(String login, String nome, int idade) {
		super(login, nome, idade);
		// TODO Auto-generated constructor stub
	}
	
	
	public void ExcluirTodos(){
		System.out.println("Todos usuarios foram excluidos");
	}
	
	public Usuario bloquearUsuarioSuper(Usuario nm){
		
		return nm;
	}
	
	public Usuario desbloquearUsuarioSuper(Usuario nm){
		
		return nm;
	}
	
	
	public void despedida(){
		System.out.println("Adeus "+super.getLogin());
	}

}
