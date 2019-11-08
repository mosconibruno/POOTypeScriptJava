import java.util.ArrayList;

public class Comunidade {
	private String nome;
	private ArrayList<Usuario> forum;
	private ArrayList<String> arquivos;
	
	public Comunidade(String nome){
		this.nome=nome;
		this.forum=new ArrayList<>();
		this.arquivos =new ArrayList<>();
	}
	
	public void adicionarUsuario(Usuario u){
		if(u!=null){
			forum.add(u);
		}
		else{
			System.out.println("Invalido");
		}
	}
	
	public void adicionarArquivo(String log,String arq){
		for (Usuario uso : forum) {
			if(uso instanceof Grupo){
				if(uso.getLogin().equals(log)){
					arquivos.add(((Grupo) uso).adicionaArquivoGrupo(arq));
				}
				else{
					System.out.println("Usuario invalido");
				}
			}
		}
	}
	
	public void removerArquivo(String log,String arqv){
		for (Usuario uso : forum) {
			if(uso instanceof Grupo){
				if(uso.getLogin().equals(log)){
					for (String arq : arquivos) {
						if(arq.equals(arqv)){
							arquivos.remove(((Grupo) uso).deletaArquivoGrupo(arqv));
						}
					}
					
				}
				else{
					System.out.println("Usuario invalido");
				}
			}
		}
	}
	
	public void deletarUsuario(String log,Usuario u){
		try{
		for (Usuario uso : forum) {
			if(uso instanceof Grupo){
				if(uso.getLogin().equals(log)){
					for (Usuario user : forum) {
						
						if(user==((Grupo) uso).groupBoard(u)){
							forum.remove(((Grupo) uso).groupBoard(u));
						}
						else{
							System.out.println("Usuario inexistente");
						}
					}
				}
				else{
					System.out.println("Usuario invalido");
				}
			}
		}
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public void mostrarArquivos(){
		for (String string : arquivos) {
			System.out.println(string);
		}
	}
	
	public void mostrarUsuario(){
		for (Usuario uso : forum) {
			System.out.println(uso.getLogin());
		}
	}
	
	public void leitura(String log , String a){
		try{
			for (Usuario uso : forum) {
				if( uso instanceof Guest){
					if(uso.getLogin().equals(log)){
						for (String arq : arquivos) {
							if(arq.equals(a)){
								((Guest) uso).lerArquivo(a);
							}
							else{
								System.out.println("Arquivo inexistente");
							}
						}
					}
				}
			}
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.toString());
		}
	}
	
	public void deletarTodosUsuario(String log){
		try{
			for (Usuario uso : forum) {
				if(uso instanceof Super){
					if(uso.getLogin().equals(log)){
						for (Usuario user : forum) {
							forum.clear();
						}
					}
				}
			}
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
		}
	}
	
	public void gravacao(String log , String a){
		try{
			for (Usuario uso : forum) {
				if( uso instanceof Regular){
					if(uso.getLogin().equals(log)){
						for (String arq : arquivos) {
							if(arq.equals(a)){
								((Regular) uso).gravaArquivoRegular(a);
							}
							else{
								System.out.println("Arquivo inexistente");
							}
						}
					}
				}
			}
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.toString());
		}
	}
	
	public void bloquearrUsuario(String log,Usuario u){
		try{
		for (Usuario uso : forum) {
			if(uso instanceof Super){
				if(uso.getLogin().equals(log)){
					for (Usuario user : forum) {
						
						if(user==((Super) uso).bloquearUsuarioSuper(u)){
							System.out.println("O usuario "+u.getLogin()+" foi bloqueado");
						}
						else{
							System.out.println("Usuario inexistente");
						}
					}
				}
				else{
					System.out.println("Usuario invalido");
				}
			}
		}
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public void desbloquearrUsuario(String log,Usuario u){
		try{
		for (Usuario uso : forum) {
			if(uso instanceof Super){
				if(uso.getLogin().equals(log)){
					for (Usuario user : forum) {
						
						if(user==((Super) uso).desbloquearUsuarioSuper(u)){
							System.out.println("O usuario "+u.getLogin()+" foi desbloqueado" );
						}
						else{
							System.out.println("Usuario inexistente");
						}
					}
				}
				else{
					System.out.println("Usuario invalido");
				}
			}
		}
		}catch(Exception e){
			System.out.println(e.toString());
		}
	}
	
	public void sairComunidade(Usuario u){
		u.despedida();
	}
}
