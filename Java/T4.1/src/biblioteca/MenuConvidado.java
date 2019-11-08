package biblioteca;

import java.util.ArrayList;
import java.util.Scanner;

public class MenuConvidado extends Menu {
	private int opc;
	private ArrayList<Livro> livros = new ArrayList<Livro>();
	private Scanner s = new Scanner(System.in);
	private Biblioteca b = new Biblioteca("Fatec");

	@Override
	public void tela() {
		do {
			System.out.println("\n----SISTEMA DA BIBLIOTECA----");
			System.out.println("1 - Listar todos os livros ");
			System.out.println("9 - Encerrar Sistema ");
			System.out.print("\nDigite sua opção: ");
			opc = Integer.parseInt(s.nextLine());		
			
			switch(opc) {
				case 1: 
					if(livros.isEmpty()) {
						System.out.println("\nAinda não existem livros na biblioteca.\n"); 
					}else {
						System.out.println("\nTodos os livros de nossa biblioteca:\n");
						b.listarTudo(); 
					}
				break;
				case 9:
					System.out.println("\nSISTEMA ENCERRADO");
					break;
				default:
					System.out.println("\nOpção Inválida\n\n");
					break;
				}
			} while(opc!=9);
		}
		
	}

