package biblioteca;

import java.util.Scanner;

public class Login {

private int opc, senha;	
private Scanner s = new Scanner(System.in);



	public void login() throws MinhaException {
		do {
			System.out.println("\n----SISTEMA DA BIBLIOTECA----");
			System.out.println("1 - Logar como Admin");
			System.out.println("2 - Logar como Bibliotecário");
			System.out.println("3 - Logar como Convidado");
			System.out.println("9 - Encerrar Sistema ");
			System.out.print("\nDigite sua opção: ");
			opc = Integer.parseInt(s.nextLine());		
			
			switch(opc) {
				case 1:
					try {
						senha = 0;
						System.out.println("\nInsira a senha numérica: ");
						senha = Integer.parseInt(s.nextLine());
						if (senha == 123) {
							Menu a = new Menu();
							a.tela();
						}else {
							throw new SenhaIncorretaException();
						}
						}catch(MinhaException e){
						System.out.println(e.getMessage());						
						}catch(NumberFormatException e) {
							System.out.println("Senha Incorreta!");
						}
					break;
				case 2:
					try {
						senha = 0;
						System.out.println("\nInsira a senha numérica: ");
						senha = Integer.parseInt(s.nextLine());
						if (senha == 456) {
							Menu b = new MenuBibliotecario();
							MenuBibliotecario c = (MenuBibliotecario) b;
							c.tela();							
						}else {
							throw new SenhaIncorretaException();
						}
						}catch(MinhaException e){
							System.out.println(e.getMessage());						
						}catch(NumberFormatException e) {
							System.out.println("Senha Incorreta!");
						}
					break;
				case 3:
					try {
						senha = 0;
						System.out.println("\nInsira a senha numérica: ");
						senha = Integer.parseInt(s.nextLine());
						if (senha == 789) {
							Menu d = new MenuConvidado();
							MenuConvidado e = (MenuConvidado) d;
							e.tela();							
						}else {
							throw new SenhaIncorretaException();
						}
						}catch(MinhaException e){
							System.out.println(e.getMessage());						
						}catch(NumberFormatException e) {
							System.out.println("Senha Incorreta!");
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
