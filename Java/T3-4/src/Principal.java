
public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Super s =new Super("baan", "ban",60 );
		s.boasVindas();
		s.ExcluirTodos();
		s.despedidaSuper();
		
		Regular r=new Regular("Sol", "Escanor", 40);
		r.boasVindas();
		r.dashBoard();
		r.lerArquivoRegular("texto.txt");
		r.despedidaRegular();
		
		
		Grupo g= new Grupo("Cavaleiros sagrados", "Sete pecados", 20);
		g.boasVindas();
		g.adicionaArquivoGrupo("Loswayne");
		g.deletaArquivoGrupo("Gideon");
		g.despedidaGrupo();
		
		
		Guest gt= new Guest("Trovao", "Gilthunder", 19);
		gt.boasVindas();
		gt.leArquivoGuest("Lostwayne");
		gt.despedidaGuest();
	}

}
