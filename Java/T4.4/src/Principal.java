
public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Grupo g1 =new Grupo("Raposa", "ban",60);
		Super s1 =new Super("Dragao", "meliodas",3000);
		Guest g11 =new Guest("Urso", "king", 5000);
		Regular r1 =new Regular("Cobra", "Diane", 60);
		Super s2 =new Super("Leao","escanor", 40);
		Comunidade c =new Comunidade("teste");
		c.adicionarUsuario(g1);
		c.adicionarUsuario(s1);
		c.adicionarUsuario(g11);
		c.adicionarUsuario(r1);
		c.adicionarUsuario(s2);
		
		c.adicionarArquivo(g1.getLogin(),"teste");
		c.mostrarArquivos();
		//c.deletarUsuario(g1.getLogin(),s1);
		//c.deletarTodosUsuario("Dragao");
		c.mostrarUsuario();
		//c.bloquearrUsuario("Leao", g1);
		//c.desbloquearrUsuario("Dragao", g11);
		c.sairComunidade(r1);
		g1.despedida();
		s1.despedida();
		
	}

}
