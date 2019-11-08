package biblioteca;

import java.util.ArrayList;
import java.util.Scanner;

public class MenuBibliotecario extends Menu {
	
	private int opc, ano, contLiv, cont, contF, contC, contL;
	private ArrayList<Estante> estantes = new ArrayList<Estante>();
	private ArrayList<Livro> livros = new ArrayList<Livro>();
	private String nome, autor;
	private Scanner s = new Scanner(System.in);
	private Biblioteca b = new Biblioteca("Fatec");
	
	@Override
	public void tela() {
			do {
			System.out.println("\n----SISTEMA DA BIBLIOTECA----");
			System.out.println("1 - Inserir novo livro ");
			System.out.println("2 - Listar todos os livros ");
			System.out.println("3 - Listar livros de Filosofia  ");
			System.out.println("4 - Listar autores ");
			System.out.println("5 - Quantidade de livros de Ci�ncia ");
			System.out.println("9 - Encerrar Sistema ");
			System.out.print("\nDigite sua op��o: ");
			opc = Integer.parseInt(s.nextLine());		
			
			switch(opc) {
				case 1:
					do {
						System.out.println("\n1 - Inserir livro na estante de Ci�ncia");
						System.out.println("2 - Inserir livro na estante de Literatura");
						System.out.println("3 - Inserir livro na estante de Filosofia");
						System.out.print("\nDigite sua op��o: ");
						opc = Integer.parseInt(s.nextLine());
						switch(opc){
							case 1:
								System.out.print("\nDigite o nome do livro: ");
								nome = s.nextLine();
								System.out.print("Digite o nome do autor: ");
								autor = s.nextLine();
								System.out.print("Digite o ano de publica��o: ");
								ano = Integer.parseInt(s.nextLine());
								livros.add(new Livro(this.nome,this.autor,this.ano));
								cont = 0;
								for (Estante estante : estantes) {
									if(estante.getCatEstante() == (Categoria.Ci�ncia)) {
										b.mostrarEstantes().get(cont).inserirLivro(livros.get(contLiv++));
										System.out.println("\nLivro inserido com sucesso");
										contC++;
										break;
										}
									cont++;
								}
							//	System.out.println("N�o existe nenhuma estante dessa categoria");
								break;
							case 2:
								System.out.print("\nDigite o nome do livro: ");
								nome = s.nextLine();
								System.out.print("Digite o nome do autor: ");
								autor = s.nextLine();
								System.out.print("Digite o ano de publica��o: ");
								ano = Integer.parseInt(s.nextLine());
								livros.add(new Livro(this.nome,this.autor,this.ano));
								cont = 0;
								for (Estante estante : estantes) {			
									if(estante.getCatEstante() == (Categoria.Literatura)) {
										b.mostrarEstantes().get(cont).inserirLivro(livros.get(contLiv++));
										System.out.println("\nLivro inserido com sucesso");
										contL++;
										break;					
										}
									cont++;
								}
							//	System.out.println("N�o existe nenhuma estante dessa categoria");
								break;
							case 3:
								System.out.print("\nDigite o nome do livro: ");
								nome = s.nextLine();
								System.out.print("Digite o nome do autor: ");
								autor = s.nextLine();
								System.out.print("Digite o ano de publica��o: ");
								ano = Integer.parseInt(s.nextLine());
								livros.add(new Livro(this.nome,this.autor,this.ano));
								cont = 0;
								for (Estante estante : estantes) {			
									if(estante.getCatEstante() == (Categoria.Filosofia)) {
										b.mostrarEstantes().get(cont).inserirLivro(livros.get(contLiv++));
										System.out.println("\nLivro inserido com sucesso");
										contF++;
										break;					
										}
									cont++;
								}
							//	System.out.println("N�o existe nenhuma estante dessa categoria");
								break;
							default:
								System.out.println("Op��o Inv�lida");
								break;
						}
					} while(opc != 1 && opc != 2 && opc != 3);
				break;
				case 2:
					if(livros.isEmpty()) {
						System.out.println("\nAinda n�o existem livros na biblioteca.\n"); 
					}else {
						System.out.println("\nTodos os livros de nossa biblioteca:\n");
						b.listarTudo(); 
					}
					break;
				case 3:
					if(contF != 0) {
						System.out.println("\nOs livros de filosofia s�o: \n");
						for (int i = 0; i < contF; i++) {
							System.out.println(b.listarFilosofia()[i].getNome());
						} 
					}else
						System.out.println("\nAinda n�o existem livros de Filosofia na biblioteca.");
					break;
				case 4:
					do {
						System.out.println("\n---Categoria dos Autores---");
						System.out.println("1 - Autores de Ci�ncia");
						System.out.println("2 - Autores de Literatura");
						System.out.println("3 - Autores de Filosofia");
						System.out.print("\nDigite sua op��o: ");
						opc = Integer.parseInt(s.nextLine());
						switch(opc){
							case 1:
								System.out.print("\nAutores de Ci�ncia: \n");
								if(b.listarAutores(Categoria.Ci�ncia).isEmpty())
									System.out.println("\nN�o existe nenhum autor nessa categoria\n");
								else {
								for (int i = 0; i < b.listarAutores(Categoria.Ci�ncia).size(); i++) {
									System.out.println(b.listarAutores(Categoria.Ci�ncia).get(i));
									} }
								break;
							case 2:
								System.out.print("\nAutores de Literatura: \n");
								if(b.listarAutores(Categoria.Literatura).isEmpty())
									System.out.println("\nN�o existe nenhum autor nessa categoria\n");
								else {
								for (int i = 0; i < b.listarAutores(Categoria.Literatura).size(); i++) {
									System.out.println(b.listarAutores(Categoria.Literatura).get(i));
									} }
								break;
							case 3:
								System.out.print("\nAutores de Filosofia: \n");
								if(b.listarAutores(Categoria.Filosofia).isEmpty())
									System.out.println("\nN�o existe nenhum autor nessa categoria\n");
								else {
								for (int i = 0; i < b.listarAutores(Categoria.Filosofia).size(); i++) {
									System.out.println(b.listarAutores(Categoria.Filosofia).get(i));
									} }
								break;
							default:
								System.out.println("\nOp��o Inv�lida");
								break;
						}
					} while(opc != 1 && opc != 2 && opc != 3);
					break;
				case 5:
					System.out.println("\nA Quantidade de Livros de Ci�ncia �: " + b.contarCiencia());
					break;
				case 9:
					System.out.println("\nSISTEMA ENCERRADO");
					break;
				default:
					System.out.println("\nOp��o Inv�lida\n\n");
					break;
				}
			} while(opc!=9);
		}
	}

